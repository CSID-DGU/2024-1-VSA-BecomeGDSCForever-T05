import * as Styled from './style.ts'
import Row from "@/components/Common/Row";
import H3 from "@/components/Common/Font/Heading/H3";
import theme from "@/shared/theme.ts";
import Spacer from "@/components/Common/Spacer";
import H6 from "@/components/Common/Font/Heading/H6";
import SizedBox from "@/components/Common/SizedBox";
import Sub3 from "@/components/Common/Font/Body/Sub3";

export default function QuestionSummary() {

    const description = "포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~";

    return (
        <Styled.Container>
            <Row>
                <H3 color={theme.colorSystem.black} text={"핵심 키워드"}/>
                <Spacer flex={1} direction={"horizontal"}/>
                <H6 color={theme.colorSystem.neutral["500"]} text={"12분 전 질문"}/>
            </Row>
            <SizedBox height={"20px"}/>
            <Sub3 color={theme.colorSystem.neutral["700"]} textAlign={"left"} text={description}/>
        </Styled.Container>
    )
}