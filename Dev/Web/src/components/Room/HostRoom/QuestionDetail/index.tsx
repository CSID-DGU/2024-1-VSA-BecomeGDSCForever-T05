import * as Styled from './style.ts'
import Padding from "@/components/Common/Padding";
import theme from "@/shared/theme.ts";
import CustomMarkdown from "@/components/Common/CustomMarkdown";
import SizedBox from "@/components/Common/SizedBox";
import Sub3 from "@/components/Common/Font/Body/Sub3";
import Row from "@/components/Common/Row";
import H6 from "@/components/Common/Font/Heading/H6";
import {calculateTime, convertStringToDate} from "@/utils/dateTimeUtil.ts";
import {DialogueDetailState} from "@/interfaces/states/dialogue/DialogueDetailState.ts";

interface props {
    dialogueDetail: DialogueDetailState;
}

export default function QuestionDetail(props: props) {

    return (
        <Row>
            <Padding all={"20px"} backgroundColor={theme.colorSystem.white}
                     borderColor={theme.colorSystem.neutral["300"]} border={"1px solid"} borderRadius={"12px"}
                     width={"800px"}>
                <Styled.Container>
                    <CustomMarkdown shortCode={props.dialogueDetail.questionShortCode}
                                    longCode={props.dialogueDetail.questionLongCode}/>
                    <SizedBox height={"12px"}/>
                    <Sub3 text={props.dialogueDetail.questionContent} textAlign={"left"}/>
                    <SizedBox height={"12px"}/>
                    <H6 text={`${calculateTime(convertStringToDate(props.dialogueDetail.askedAt))} 질문`}
                        textAlign={"right"} color={theme.colorSystem.neutral["500"]}/>
                </Styled.Container>
            </Padding>
        </Row>
    )
}