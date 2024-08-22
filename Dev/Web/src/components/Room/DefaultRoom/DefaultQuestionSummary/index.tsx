import * as Styled from './style';
import theme from "@/shared/theme.ts";
import Sub3 from "@/components/Common/Font/Body/Sub3";
import SizedBox from "@/components/Common/SizedBox";
import {useModeullakDialogueTemporarySummary} from "@/hooks/dialogue/useModeullakDialogueTemporarySummary.ts";
import QuestionSummaryDefault from "@/components/Room/DefaultRoom/DefaultQuestionSummary/QuestionSummaryDefault";
import QuestionSummaryEmpty from "@/components/Room/DefaultRoom/DefaultQuestionSummary/QuestionSummaryEmpty";

interface props {
    modeullakId: number;
}

export default function DefaultQuestionSummary(props: props) {

    const modeullakDialogueTemporarySummary = useModeullakDialogueTemporarySummary(props.modeullakId);

    return (
        <Styled.Container>
            <Sub3 color={theme.colorSystem.neutral["500"]} textAlign={"start"} text={"실시간 질문 현황"}/>
            <SizedBox height={"8px"}/>
            {
                modeullakDialogueTemporarySummary.dialogues.length === 0 ?
                    <QuestionSummaryEmpty/> : null
            }
            <Styled.GridView>
                {
                    modeullakDialogueTemporarySummary.dialogues.map((dialogue) => {
                        return (
                            <QuestionSummaryDefault state={dialogue}/>
                        )
                    })
                }
            </Styled.GridView>
        </Styled.Container>
    )
}