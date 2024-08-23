import * as Styled from './style.ts'
import Padding from "@/components/Common/Padding";
import theme from "@/shared/theme.ts";
import CustomMarkdown from "@/components/Common/CustomMarkdown";
import SizedBox from "@/components/Common/SizedBox";
import Row from "@/components/Common/Row";
import H6 from "@/components/Common/Font/Heading/H6";
import Spacer from "@/components/Common/Spacer";
import {DialogueDetailState} from "@/interfaces/states/dialogue/DialogueDetailState.ts";
import {calculateTime, convertStringToDate} from "@/utils/dateTimeUtil.ts";

interface props {
    dialogueDetail: DialogueDetailState;
}

export default function AnswerDetail(props: props) {

    return (
        <Row>
            <Spacer flex={1} direction={"horizontal"}/>
            <Padding all={"20px"} backgroundColor={theme.colorSystem.white}
                     borderColor={theme.colorSystem.neutral["300"]} border={"1px solid"} borderRadius={"12px"}
                     width={"800px"}>
                <Styled.Container>
                    <CustomMarkdown shortCode={props.dialogueDetail.answer}/>
                    <SizedBox height={"12px"}/>
                    <H6 text={`${calculateTime(convertStringToDate(props.dialogueDetail.answeredAt))} 답변`}
                        textAlign={"right"}
                        color={theme.colorSystem.neutral["500"]}/>
                </Styled.Container>
            </Padding>
        </Row>
    )
}