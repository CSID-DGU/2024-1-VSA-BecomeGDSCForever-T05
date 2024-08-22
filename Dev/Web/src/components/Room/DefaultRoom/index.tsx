import * as Styled from './style';
import DefaultRoomHeader from "@/components/Room/DefaultRoom/DefaultRoomHeader";
import SizedBox from "@/components/Common/SizedBox";
import DefaultRoomProgress from "@/components/Room/DefaultRoom/DefaultRoomProgress";
import DefaultQuestionSummary from "@/components/Room/DefaultRoom/DefaultQuestionSummary";
import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";
import {useModeullakSummaries} from "@/hooks/modeullak/useModeullakSummaries.ts";
import {exitModeullak} from "@/apis/modeullak";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {CONSTANT} from "@/constants/Constant.ts";
import Alert from "@/components/Common/Alert";

interface props {
    modeullakId: number;
}

export default function DefaultRoom(props: props) {

    /* --------------------------------------------------------------------------- */
    /* Window State -------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const navigate = useNavigate();

    /* --------------------------------------------------------------------------- */
    /* Alert State --------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState("");

    /* --------------------------------------------------------------------------- */
    /* Modeullak State ----------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const modeullakSummaries = useModeullakSummaries(props.modeullakId);

    /**
     * @date 2024-08-22
     * @author Changseop Yun
     * @description Exit Modeullak Button Click Event
     */
    const handleClose = async () => {

        try {
            const response = await exitModeullak(props.modeullakId);

            if (response.success) {
                setIsAlertOpen(true);
                setAlertMessage("모드락이 종료되었습니다.");

                navigate(CONSTANT.ROUTER.HOME);
                window.location.reload();
            }
        } catch (error) {
            setIsAlertOpen(true);
            setAlertMessage(error.response.data.error.message);
        }
    }

    return (
        <Styled.Container>
            <DefaultRoomHeader code={modeullakSummaries.participationCode} tags={modeullakSummaries.tags}
                               title={modeullakSummaries.title}/>
            <SizedBox height={"40px"}/>
            <DefaultRoomProgress total={modeullakSummaries.totalTime} remained={modeullakSummaries.remainedTime}/>
            <SizedBox height={"28px"}/>
            <DefaultQuestionSummary modeullakId={props.modeullakId}/>
            <SizedBox height={"184px"}/>
            {
                modeullakSummaries.isHost && (
                    <Row>
                        <Spacer flex={1} direction={"horizontal"}/>
                        <Styled.Button onClick={handleClose}>
                            <H1 color={theme.colorSystem.white} text={"종료하기"}/>
                        </Styled.Button>
                    </Row>
                )
            }
            {
                isAlertOpen && (
                    <Alert title={alertMessage} onClick={() => setIsAlertOpen(false)}/>
                )
            }
        </Styled.Container>
    )
}