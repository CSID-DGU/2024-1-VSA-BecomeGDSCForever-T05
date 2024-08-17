import * as Styled from './style';
import Row from "@/components/Common/Row";
import QuestionTitle from "@/components/QuestionSummary/QuestionItem/QuestionTitle";
import Spacer from "@/components/Common/Spacer";
import QuestionTime from "@/components/QuestionSummary/QuestionItem/QuestionTime";
import SizedBox from "@/components/Common/SizedBox";
import theme from "@/shared/theme.ts";
import QuestionTag from "@/components/QuestionSummary/QuestionItem/QuestionTag";
import QuestionContent from "@/components/QuestionSummary/QuestionItem/QuestionContent";
import {QuestionSummaryState} from "@/interfaces/states/QuestionSummaryState.ts";

interface props {
    isFirst?: boolean;
    isLast?: boolean;
    onClick?: () => void | undefined;
    questionSummary: QuestionSummaryState;
}

export default function QuestionItem(props: props) {

    return (
        <Styled.Container onClick={props.onClick}>
            {!props.isFirst && <SizedBox height={"12px"}/>}
            <Row justifyContent={"center"}>
                <QuestionTitle title={props.questionSummary.title}/>
                <Spacer flex={1} direction={"horizontal"}/>
                <QuestionTime/>
            </Row>
            <SizedBox height={"8px"}/>
            <Row>
                {
                    props.questionSummary.tags.map((tag, index) => {

                        if (index == 0) {
                            return <QuestionTag key={index} color={theme.colorSystem.secondary["200"]} text={tag}/>
                        } else {
                            return (
                                <>
                                    <SizedBox width={"12px"}/>
                                    <QuestionTag color={theme.colorSystem.secondary["200"]} text={tag}/>
                                </>
                            )
                        }
                    })
                }
                <Spacer flex={1} direction={"horizontal"}/>
                {
                    props.questionSummary.isAdmin && (
                        <QuestionTag color={theme.colorSystem.secondary["100"]} text={"관리자 참여"}/>
                    )
                }
            </Row>
            <SizedBox height={"8px"}/>
            <QuestionContent
                text={props.questionSummary.content}/>
            {!props.isLast && (
                <>
                    <SizedBox height={"12px"}/>
                    <Styled.Line/>
                </>
            )}
        </Styled.Container>
    );
}