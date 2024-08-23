import json
import threading

from fastapi import FastAPI
from kafka import KafkaConsumer, KafkaProducer
from app.config import Config
from service.llm_service import LlmService

config = Config()
config.ready()

llm_service = LlmService()
llm_service.ready()

# 실행시 Kafka 소비자가 백그라운드에서 계속 실행되도록 함
async def lifespan(app: FastAPI):
    print("Starting Kafka consumers...")
    threading.Thread(target=consume_questions, daemon=True).start()
    threading.Thread(target=consume_answers, daemon=True).start()
    yield
    print("Shutting down Kafka consumers...")
    question_consumer.close()
    dialogue_consumer.close()

# FastAPI 애플리케이션 생성
app = FastAPI(lifespan=lifespan)

# Step 3: Kafka 소비자 및 생산자 설정
question_consumer = KafkaConsumer(
    'question_topic',  # 질문을 받을 Kafka 토픽
    bootstrap_servers=['172.16.52.7:9092', '172.16.52.7:9093', '172.16.52.7:9094'],
    auto_offset_reset='earliest',
    enable_auto_commit=True,
    group_id='question_group',
    value_deserializer=lambda x: json.loads(x.decode('utf-8'))
)

dialogue_consumer = KafkaConsumer(
    'dialogue_topic',  # 답변을 받을 Kafka 토픽
    bootstrap_servers=['172.16.52.7:9092', '172.16.52.7:9093', '172.16.52.7:9094'],
    auto_offset_reset='earliest',
    enable_auto_commit=True,
    group_id='dialogue_group',
    value_deserializer=lambda x: json.loads(x.decode('utf-8'))
)

# 생성자
answer_producer = KafkaProducer(
    bootstrap_servers=['172.16.52.7:9092', '172.16.52.7:9093', '172.16.52.7:9094'],  # Kafka 브로커 주소
    value_serializer=lambda v: json.dumps(v).encode('utf-8')  # 메시지를 JSON 형식으로 직렬화
)

def consume_questions():
    print("Consuming questions...")
    
    for message in question_consumer:
        # try:
            data = message.value
            
            request_dialogue_id = data.get('request_dialogue_id')
            short_code = data.get('short_code')
            long_code = data.get('long_code')
            question_content = data.get('question_content')

            if request_dialogue_id and short_code and long_code and question_content:
                answer = None
                new_keyword = None
                similar_dialogue_id = None
                
                response = llm_service.generate_answer(short_code, long_code, question_content)
                
                if response:
                    similar_dialogue_id = response.get('dialogue_id')
                    answer = response.get('answer')
                else:
                    new_keyword = llm_service.generate_keyword(short_code, long_code, question_content)

                answer_producer.send('answer_topic', value={
                    'request_dialogue_id': request_dialogue_id,
                    'similar_dialogue_id': similar_dialogue_id,
                    'answer': answer,
                    'keyword': new_keyword
                })

        # except Exception as e:
        #     print(f"Error processing message: {str(e)}")
    
    print("Done consuming questions")

def consume_answers():
    print("Consuming answers...")
    
    for message in dialogue_consumer:
        try:
            data = message.value
            dialogue_id = data.get('dialogue_id')
            question = data.get("question")
            answer = data.get("answer")

            if question and answer:
                llm_service.save_question_answer(dialogue_id, question, answer)
        except Exception as e:
            print(f"Error processing message: {str(e)}")
    
    print("Done consuming answers")