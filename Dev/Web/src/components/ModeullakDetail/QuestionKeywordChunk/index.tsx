import * as Styled from "./style.ts";
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";
import SizedBox from "@/components/Common/SizedBox";
import {useQuestionKeywordChunks} from "@/hooks/useQuestionKeywordChunks.ts";
import QuestionKeyword from "@/components/ModeullakDetail/QuestionKeywordChunk/QuestionKeyword";

export default function QuestionKeywordChunk() {

    const questionKeywordChunk = useQuestionKeywordChunks();

    return (
        <Styled.Container>
            <H1 color={theme.colorSystem.black} textAlign={"left"} text={"핵심 키워드 모음"}/>
            <SizedBox height={"20px"}/>
            <Styled.GridContainer>
                {
                    questionKeywordChunk.map((chunk) => {
                        return (
                            <QuestionKeyword
                                key={chunk.id}
                                id={chunk.id}
                                keyword={chunk.keyword}
                                question={chunk.question}
                                answerCount={chunk.answerCount}
                            />
                        )
                    })
                }
            </Styled.GridContainer>
        </Styled.Container>
    );
}