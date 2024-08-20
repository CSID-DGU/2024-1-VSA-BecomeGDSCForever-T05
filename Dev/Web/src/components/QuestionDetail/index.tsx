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
import AnswerTagItem from "@/components/QuestionDetail/AnswerTagItem";
import Row from "@/components/Common/Row";
import CloseButton from "@/assets/icons/CloseButton.svg";
import UserQuestionChunk from "@/components/QuestionDetail/UserQuestionChunk";
import QuestionKeywordChunk from "@/components/QuestionDetail/QuestionKeywordChunk";
import {useModeullakDetail} from "@/hooks/modeullak/useModeullakDetail.ts";

export default function QuestionDetail() {

    const dispatch = useDispatch<AppDispatch>();

    const handleClose = () => {
        dispatch(updateAnswerModalState(false));
    }

    const modeullakDetailState = useModeullakDetail(1);

    return (
        <Padding all={"20px"} width={"1080px"}>s
            <Styled.Container>
                <Row>
                    <Spacer flex={1} direction={"horizontal"}/>
                    <Styled.SvgButton src={CloseButton} width={"24px"} height={"24px"} onClick={handleClose}
                    />
                </Row>
                <SizedBox height={"20px"}/>
                <H1 color={theme.colorSystem.black} textAlign={"left"} text={modeullakDetailState.title}/>
                <SizedBox height={"20px"}/>
                <Sub2 color={theme.colorSystem.neutral["800"]}
                      textAlign={"left"}
                      text={modeullakDetailState.content}/>
                <SizedBox height={"20px"}/>
                <Row>
                    {
                        modeullakDetailState.tags.map((tag) => {
                            return (
                                <>
                                    <AnswerTagItem color={theme.colorSystem.secondary["200"]} text={tag}/>
                                    <SizedBox width={"12px"}/>
                                </>
                            )
                        })
                    }
                    <Spacer flex={1} direction={"horizontal"}/>
                    <H4 color={theme.colorSystem.neutral["500"]}
                        text={`${modeullakDetailState.startedAt} ~ ${modeullakDetailState.endedAt}`}/>
                </Row>
                <SizedBox height={"20px"}/>
                <Styled.Line color={theme.colorSystem.secondary["400"]}/>
                <SizedBox height={"20px"}/>
                <UserQuestionChunk/>
                <SizedBox height={"20px"}/>
                <QuestionKeywordChunk/>
            </Styled.Container>
        </Padding>
    )
}