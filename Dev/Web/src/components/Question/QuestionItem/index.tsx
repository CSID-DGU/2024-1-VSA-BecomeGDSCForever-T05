import * as Styled from './style';
import Row from "@/components/Common/Row";
import QuestionTitle from "@/components/Question/QuestionItem/QuestionTitle";
import Spacer from "@/components/Common/Spacer";
import QuestionTime from "@/components/Question/QuestionItem/QuestionTime";
import SizedBox from "@/components/Common/SizedBox";
import theme from "@/shared/theme.ts";
import QuestionTag from "@/components/Question/QuestionItem/QuestionTag";
import QuestionContent from "@/components/Question/QuestionItem/QuestionContent";

interface props {
    isFirst?: boolean;
    isLast?: boolean;
    onClick?: () => void | undefined;
}

export default function QuestionItem(props: props) {

    return (
        <Styled.Container onClick={props.onClick}>
            {!props.isFirst && <SizedBox height={"12px"}/>}
            <Row justifyContent={"center"}>
                <QuestionTitle/>
                <Spacer flex={1} direction={"horizontal"}/>
                <QuestionTime/>
            </Row>
            <SizedBox height={"8px"}/>
            <Row>
                <QuestionTag color={theme.colorSystem.secondary["200"]} text={"C"}/>
                <SizedBox width={"12px"}/>
                <QuestionTag color={theme.colorSystem.secondary["200"]} text={"Pointer"}/>
                <SizedBox width={"12px"}/>
                <QuestionTag color={theme.colorSystem.secondary["200"]} text={"Memory"}/>
                <Spacer flex={1} direction={"horizontal"}/>
                <QuestionTag color={theme.colorSystem.secondary["100"]} text={"관리자 참여"}/>
            </Row>
            <SizedBox height={"8px"}/>
            <QuestionContent
                text={"포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~"}/>
            {!props.isLast && (
                <>
                    <SizedBox height={"12px"}/>
                    <Styled.Line/>
                </>
            )}
        </Styled.Container>
    );
}