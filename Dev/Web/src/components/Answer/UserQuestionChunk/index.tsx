import * as Styled from "./style.ts";
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";
import SizedBox from "@/components/Common/SizedBox";
import QuestionChunk from "@/components/Answer/UserQuestionChunk/QuestionChunk";
import {useUserQuestionChunk} from "@/hooks/useQuestionChunks.ts";

export default function UserQuestionChunk() {

    const userQuestionChunk = useUserQuestionChunk();

    return (
        <Styled.Container>
            <H1 color={theme.colorSystem.black} textAlign={"left"} text={"나의 질문 모음"}/>
            <SizedBox height={"20px"}/>
            <Styled.GridContainer>
                {userQuestionChunk.map((chunk) => (
                    <QuestionChunk
                        key={chunk.id}
                        id={chunk.id}
                        keyword={chunk.keyword}
                        answerBy={chunk.answerBy}
                        question={chunk.question}
                    />
                ))}
            </Styled.GridContainer>
        </Styled.Container>
    );
}