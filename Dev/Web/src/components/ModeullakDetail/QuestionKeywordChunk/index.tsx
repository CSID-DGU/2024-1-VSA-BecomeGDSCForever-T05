import * as Styled from "./style.ts";
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";
import SizedBox from "@/components/Common/SizedBox";
import QuestionKeyword from "@/components/ModeullakDetail/QuestionKeywordChunk/QuestionKeyword";
import {useModeullakKeyword} from "@/hooks/modeullak/useModeullakKeyword.ts";

interface props {
    modeullakId: number;
}

export default function QuestionKeywordChunk(props: props) {

    const modeullakKeyword = useModeullakKeyword(props.modeullakId);

    return (
        <Styled.Container>
            <H1 color={theme.colorSystem.black} textAlign={"left"} text={"핵심 키워드 모음"}/>
            <SizedBox height={"20px"}/>
            <Styled.GridContainer>
                {
                    modeullakKeyword.keywords.map((chunk) => {
                        return (
                            <QuestionKeyword
                                key={chunk.id}
                                id={chunk.id}
                                keyword={chunk.name}
                                question={chunk.description}
                                answerCount={chunk.similarQuestionCount}
                            />
                        )
                    })
                }
            </Styled.GridContainer>
        </Styled.Container>
    );
}