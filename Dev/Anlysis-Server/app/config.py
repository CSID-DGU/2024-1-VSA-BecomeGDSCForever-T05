import os

from dotenv import load_dotenv

class Config:
    
    def __init__(self):
        load_dotenv()
        
    def ready(self):
        os.environ["LANGCHAIN_PROJECT"] = "MODEUL"
        os.environ["LANGCHAIN_TRACING_V2"] = "true"
        os.environ["LANGCHAIN_API_KEY"] = os.environ.get('LANGSMITH_KEY')
        
        os.environ["OPENAI_API_KEY"] = os.environ.get('CHAT_GPT_KEY')