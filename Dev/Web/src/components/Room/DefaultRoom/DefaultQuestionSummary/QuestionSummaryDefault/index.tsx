import * as Styled from './style.ts'
import Row from "@/components/Common/Row";
import H3 from "@/components/Common/Font/Heading/H3";
import theme from "@/shared/theme.ts";
import Spacer from "@/components/Common/Spacer";
import H6 from "@/components/Common/Font/Heading/H6";
import SizedBox from "@/components/Common/SizedBox";
import Sub3 from "@/components/Common/Font/Body/Sub3";
import {DialogueTemporarySummaryState} from "@/interfaces/states/dialogue/DialogueTemporarySummaryState.ts";
import {calculateTime, convertStringToDate} from "@/utils/dateTimeUtil.ts";

interface props {
    state: DialogueTemporarySummaryState;
}

export default function QuestionSummaryDefault(props: props) {

    return (
        <Styled.Container>
            <Row>
                <H3 color={theme.colorSystem.black} text={props.state.keywordName}/>
                <Spacer flex={1} direction={"horizontal"}/>
                <H6 color={theme.colorSystem.neutral["500"]}
                    text={`${calculateTime(convertStringToDate(props.state.updatedAt))} ${props.state.isQuestion ? "질문" : "답변"}`}/>
            </Row>
            <SizedBox height={"20px"}/>
            <Sub3 color={theme.colorSystem.neutral["700"]} textAlign={"left"} text={props.state.questionContent}/>
        </Styled.Container>
    )
}