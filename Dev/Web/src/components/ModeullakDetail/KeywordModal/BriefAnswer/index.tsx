import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import theme from "@/shared/theme.ts";
import * as Styled from "./style.ts";
import Padding from "@/components/Common/Padding";
import CustomMarkdown from "@/components/Common/CustomMarkdown";
import SizedBox from "@/components/Common/SizedBox";

interface props {
    answer: string;
    isAnsweredByLlm: boolean;
}

export default function BriefAnswer(props: props) {

    return (
        <Row alignItems={"end"}>
            <Spacer flex={1} direction={"horizontal"}/>
            <SizedBox width={"20px"}/>
            <Padding all={"20px"}
                     backgroundColor={theme.colorSystem.neutral["100"]}
                     borderColor={theme.colorSystem.neutral["300"]} border={"1px solid"} borderRadius={"12px"}
                     width={"800px"}>
                <Styled.Container>
                    <CustomMarkdown shortCode={props.answer}/>
                </Styled.Container>
            </Padding>
        </Row>
    )
}