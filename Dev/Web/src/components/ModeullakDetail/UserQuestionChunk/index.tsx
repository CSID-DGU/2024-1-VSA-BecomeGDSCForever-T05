import * as Styled from "./style.ts";
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";
import SizedBox from "@/components/Common/SizedBox";
import QuestionChunk from "@/components/ModeullakDetail/UserQuestionChunk/QuestionChunk";
import {useModeullakUserDialogueSummary} from "@/hooks/dialogue/useModeullakUserDialogueSummary.ts";

interface props {
    modeullakId: number;
}

export default function UserQuestionChunk(props: props) {

    const modeullakUserDialogueSummaries = useModeullakUserDialogueSummary(props.modeullakId);

    return (
        <Styled.Container>
            <H1 color={theme.colorSystem.black} textAlign={"left"} text={"나의 질문 모음"}/>
            <SizedBox height={"20px"}/>
            <Styled.GridContainer>
                {modeullakUserDialogueSummaries.dialogues.map((dialogue) => (
                    <QuestionChunk
                        key={dialogue.id}
                        id={dialogue.id}
                        keyword={dialogue.keywordName}
                        answerBy={dialogue.isAnsweredByLlm}
                        question={dialogue.questionContent}
                    />
                ))}
            </Styled.GridContainer>
        </Styled.Container>
    );
}