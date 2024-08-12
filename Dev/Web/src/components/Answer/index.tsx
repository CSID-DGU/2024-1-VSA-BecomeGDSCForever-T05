import * as Styled from './style';
import {AppDispatch} from "@/stores/store.ts";
import {useDispatch} from "react-redux";
import {updateAnswerModalState} from "@/stores/slices/answerModal.slice.ts";
import Padding from "@/components/Common/Padding";
import SizedBox from "@/components/Common/SizedBox";
import H1 from "@/components/Common/Font/Heading/H1";
import theme from "@/shared/theme.ts";
import Sub2 from "@/components/Common/Font/Body/Sub2";
import H4 from "@/components/Common/Font/Heading/H4";
import Spacer from "@/components/Common/Spacer";
import AnswerTagItem from "@/components/Answer/AnswerTagItem";
import Row from "@/components/Common/Row";
import CloseButton from "@/assets/icons/CloseButton.svg";
import BriefQuestion from "@/components/Answer/BriefQuestion";
import BriefAnswer from "@/components/Answer/BriefAnswer";

export default function Answer() {

    const dispatch = useDispatch<AppDispatch>();

    const handleClose = () => {
        dispatch(updateAnswerModalState(false));
    }

    return (
        <Padding all={"20px"} width={"1080px"}>
            <Styled.Container>
                <Row>
                    <Spacer flex={1} direction={"horizontal"}/>
                    <Styled.SvgButton src={CloseButton} width={"24px"} height={"24px"} onClick={handleClose}
                    />
                </Row>
                <SizedBox height={"20px"}/>
                <H1 color={theme.colorSystem.black} textAlign={"left"} text={"자료구조 12강 실습"}/>
                <SizedBox height={"20px"}/>
                <Sub2 color={theme.colorSystem.neutral["800"]}
                      textAlign={"left"}
                      text={"포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~\n\n\n" +
                          "포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~\n" +
                          "\n\n" +
                          "포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~\n" +
                          "\n\n" +
                          "포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~ 포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~"}/>
                <SizedBox height={"20px"}/>
                <Row>
                    <AnswerTagItem color={theme.colorSystem.secondary["200"]} text={"C"}/>
                    <SizedBox width={"12px"}/>
                    <AnswerTagItem color={theme.colorSystem.secondary["200"]} text={"Pointer"}/>
                    <SizedBox width={"12px"}/>
                    <AnswerTagItem color={theme.colorSystem.secondary["200"]} text={"Memory"}/>
                    <Spacer flex={1} direction={"horizontal"}/>
                    <H4 color={theme.colorSystem.neutral["500"]} text={"2024/07/11 14 : 30 ~ 2024/07/11 16: 30"}/>
                </Row>
                <SizedBox height={"20px"}/>
                <Styled.Line color={theme.colorSystem.secondary["400"]}/>
                <SizedBox height={"20px"}/>
                <BriefQuestion/>
                <SizedBox height={"20px"}/>
                <BriefAnswer/>
                <SizedBox height={"20px"}/>
                <BriefQuestion/>
                <SizedBox height={"20px"}/>
                <BriefAnswer isAdmin={true}/>
                <SizedBox height={"20px"}/>
                <BriefQuestion/>
                <SizedBox height={"20px"}/>
                <BriefAnswer/>
            </Styled.Container>
        </Padding>
    )
}