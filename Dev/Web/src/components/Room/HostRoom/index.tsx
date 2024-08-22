import * as Styled from './style';
import H0 from "@/components/Common/Font/Heading/H0";
import theme from "@/shared/theme.ts";
import SizedBox from "@/components/Common/SizedBox";
import QuestionBrief from "@/components/Room/UserRoom/QuestionBrief";
import {useState} from "react";
import Row from "@/components/Common/Row";
import Column from "@/components/Common/Column";
import QuestionDetail from "@/components/Room/UserRoom/QuestionDetail";
import AnswerInput from "@/components/Room/UserRoom/AnswerInput";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import {
    useModeullakUserDependentDialogueTemporarySummary
} from "@/hooks/dialogue/useModeullakUserDependentDialogueTemporarySummary.ts";
import H4 from "@/components/Common/Font/Heading/H4";

interface props {
    modeullakId: number;
}

export default function HostRoom(props: props) {

    const user = useSelector((state: RootState) => state.selectedUserState);

    const modeullakUserDialogueTemporarySummary = useModeullakUserDependentDialogueTemporarySummary(props.modeullakId, user.id);

    const [clickedQuestionId, setClickedQuestionId] = useState<number>(-1);

    const handleClick = (index: number) => () => {
        setClickedQuestionId(index);
    }

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
                                                       isClicked={clickedQuestionId === index}
                                                       onClick={handleClick(index)}/>
                                    </>
                                )
                            })
                        }
                    </Column>
                    <Column>
                        {
                            clickedQuestionId !== -1 && (
                                <>
                                    <QuestionDetail/>
                                    <SizedBox height={"40px"}/>
                                    {/*<AnswerDetail/>*/}
                                    <AnswerInput/>
                                </>
                            )
                        }
                    </Column>
                </Row>
            </Column>
        </Styled.Container>
    )
}