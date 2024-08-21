import * as Styled from './style';
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {updateAnswerModalState} from "@/stores/slices/answerModal.slice.ts";
import Padding from "@/components/Common/Padding";
import SizedBox from "@/components/Common/SizedBox";
import H1 from "@/components/Common/Font/Heading/H1";
import theme from "@/shared/theme.ts";
import Sub2 from "@/components/Common/Font/Body/Sub2";
import H4 from "@/components/Common/Font/Heading/H4";
import Spacer from "@/components/Common/Spacer";
import AnswerTagItem from "@/components/ModeullakDetail/AnswerTagItem";
import Row from "@/components/Common/Row";
import CloseButton from "@/assets/icons/CloseButton.svg";
import UserQuestionChunk from "@/components/ModeullakDetail/UserQuestionChunk";
import QuestionKeywordChunk from "@/components/ModeullakDetail/QuestionKeywordChunk";
import {useModeullakDetail} from "@/hooks/modeullak/useModeullakDetail.ts";

export default function ModeullakDetail() {

    const dispatch = useDispatch<AppDispatch>();
    const answerModalState = useSelector((state: RootState) => state.answerModalState);

    const handleClose = () => {
        dispatch(updateAnswerModalState({
            isOpen: false,
            modeullakId: -1
        }));
    }

    const modeullakDetailState = useModeullakDetail(answerModalState.modeullakId);

    return (
        <Padding all={"20px"} width={"1080px"}>
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
                <UserQuestionChunk modeullakId={answerModalState.modeullakId}/>
                <SizedBox height={"20px"}/>
                <QuestionKeywordChunk/>
            </Styled.Container>
        </Padding>
    )
}