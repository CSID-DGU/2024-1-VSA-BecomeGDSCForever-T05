import * as Styled from './style';
import H0 from "@/components/Common/Font/Heading/H0";
import theme from "@/shared/theme.ts";
import SizedBox from "@/components/Common/SizedBox";
import QuestionBrief from "@/components/Room/HostRoom/QuestionBrief";
import {useState} from "react";
import Row from "@/components/Common/Row";
import Column from "@/components/Common/Column";
import AnswerInput from "@/components/Room/HostRoom/AnswerInput";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import {
    useModeullakUserDependentDialogueTemporarySummary
} from "@/hooks/dialogue/useModeullakUserDependentDialogueTemporarySummary.ts";
import H4 from "@/components/Common/Font/Heading/H4";
import {useDialogueDetail} from "@/hooks/dialogue/useDialogueDetail.ts";
import AnswerDetail from "@/components/Room/HostRoom/AnswerDetail";
import QuestionDetail from "@/components/Room/HostRoom/QuestionDetail";

interface props {
    modeullakId: number;
}

export default function HostRoom(props: props) {

    const user = useSelector((state: RootState) => state.selectedUserState);

    const modeullakUserDialogueTemporarySummary = useModeullakUserDependentDialogueTemporarySummary(props.modeullakId, user.id);

    const [clickedQuestionId, setClickedQuestionId] = useState<number>(-1);

    const isHost = useSelector((state: RootState) => state.hostState.isHost);

    const handleClick = (index: number) => () => {

        if (clickedQuestionId !== -1 && clickedQuestionId === index) {
            setClickedQuestionId(-1);
        } else {
            setClickedQuestionId(index);
        }
    }

    const dialogueDetail = useDialogueDetail(clickedQuestionId);

    return (
        <Styled.Container>
            <Column>
                <H0 color={theme.colorSystem.primary["900"]} textAlign={"start"} text={`${user.nickname}의 질문`}/>
                <SizedBox height={"32px"}/>
                <Row>
                    <Column width={"800px"}>
                        {
                            modeullakUserDialogueTemporarySummary.dialogues.length === 0 && (
                                <Styled.Empty>
                                    <H4 color={theme.colorSystem.neutral["500"]} text={"아직 질문이 없습니다."}/>
                                </Styled.Empty>
                            )
                        }
                        {
                            modeullakUserDialogueTemporarySummary.dialogues.map((dialogue, index) => {
                                return (
                                    <>
                                        {
                                            index !== 0 && <SizedBox height={"20px"}/>
                                        }
                                        <QuestionBrief state={dialogue}
                                                       isClicked={clickedQuestionId === dialogue.id}
                                                       onClick={handleClick(dialogue.id)}/>
                                    </>
                                )
                            })
                        }
                    </Column>
                    <Column width={"1200px"}>
                        {
                            clickedQuestionId !== -1 && (
                                <>
                                    <QuestionDetail dialogueDetail={dialogueDetail}/>
                                    <SizedBox height={"40px"}/>
                                    {
                                        dialogueDetail.answer !== null && dialogueDetail.answer && (
                                            <AnswerDetail dialogueDetail={dialogueDetail}/>
                                        )
                                    }
                                    {
                                        !dialogueDetail.answer && isHost && (
                                            <AnswerInput dialogueId={dialogueDetail.id}/>
                                        )
                                    }
                                </>
                            )
                        }
                    </Column>
                </Row>
            </Column>
        </Styled.Container>
    )
}