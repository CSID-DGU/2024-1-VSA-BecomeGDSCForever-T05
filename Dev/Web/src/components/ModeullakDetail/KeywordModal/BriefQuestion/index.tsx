import Padding from "@/components/Common/Padding";
import theme from "@/shared/theme.ts";
import * as Styled from "./style.ts";
import Row from "@/components/Common/Row";
import CustomMarkdown from "@/components/Common/CustomMarkdown";
import SizedBox from "@/components/Common/SizedBox";
import Sub3 from "@/components/Common/Font/Body/Sub3";

interface props {
    questionShortCode: string;
    questionLongCode: string;
    questionContent: string;
}

export default function BriefQuestion(props: props) {

    return (
        <Row>
            <Padding all={"20px"} backgroundColor={theme.colorSystem.neutral["100"]}
                     borderColor={theme.colorSystem.neutral["300"]} border={"1px solid"} borderRadius={"12px"}
                     width={"800px"}>
                <Styled.Container>
                    <CustomMarkdown shortCode={props.questionShortCode} longCode={props.questionLongCode}/>
                    <SizedBox height={"12px"}/>
                    <Sub3 text={props.questionContent} textAlign={"left"}/>
                </Styled.Container>
            </Padding>
        </Row>
    )
}