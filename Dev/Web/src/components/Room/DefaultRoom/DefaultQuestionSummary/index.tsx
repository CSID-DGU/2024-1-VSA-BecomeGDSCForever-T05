import * as Styled from './style';
import theme from "@/shared/theme.ts";
import Sub3 from "@/components/Common/Font/Body/Sub3";
import SizedBox from "@/components/Common/SizedBox";
import QuestionSummary from "@/components/Room/DefaultRoom/DefaultQuestionSummary/QuestionSummary";

export default function DefaultQuestionSummary() {
    return (
        <Styled.Container>
            <Sub3 color={theme.colorSystem.neutral["500"]} textAlign={"start"} text={"실시간 질문 현황"}/>
            <SizedBox height={"8px"}/>
            <Styled.GridView>
                <QuestionSummary/>
                <QuestionSummary/>
                <QuestionSummary/>
                <QuestionSummary/>
                <QuestionSummary/>
                <QuestionSummary/>
                <QuestionSummary/>
                <QuestionSummary/>
                <QuestionSummary/>
            </Styled.GridView>
        </Styled.Container>
    )
}