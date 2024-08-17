import * as Styled from './style.ts'
import Row from "@/components/Common/Row";
import H3 from "@/components/Common/Font/Heading/H3";
import theme from "@/shared/theme.ts";
import Spacer from "@/components/Common/Spacer";
import H6 from "@/components/Common/Font/Heading/H6";
import SizedBox from "@/components/Common/SizedBox";
import Sub3 from "@/components/Common/Font/Body/Sub3";

interface props {
    keyword: string;
    description: string;
    createdAt: string;
    isClicked: boolean;
    onClick: () => void;
}

export default function QuestionBrief(props: props) {

    return (
        <Styled.Container isClicked={props.isClicked} onClick={props.onClick}>
            <Row>
                <H3 color={theme.colorSystem.black} text={props.keyword}/>
                <Spacer flex={1} direction={"horizontal"}/>
                <H6 color={theme.colorSystem.neutral["500"]} text={props.createdAt}/>
            </Row>
            <SizedBox height={"20px"}/>
            <Sub3 color={theme.colorSystem.neutral["700"]} textAlign={"left"} text={props.description}/>
        </Styled.Container>
    )
}