import * as Styled from './style';
import DefaultRoomHeader from "@/components/Room/DefaultRoom/DefaultRoomHeader";
import SizedBox from "@/components/Common/SizedBox";
import DefaultRoomProgress from "@/components/Room/DefaultRoom/DefaultRoomProgress";
import DefaultQuestionSummary from "@/components/Room/DefaultRoom/DefaultQuestionSummary";
import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";

export default function DefaultRoom() {

    const handleClose = () => {
        alert("back");
    }

    return (
        <Styled.Container>
            <DefaultRoomHeader/>
            <SizedBox height={"40px"}/>
            <DefaultRoomProgress/>
            <SizedBox height={"28px"}/>
            <DefaultQuestionSummary/>
            <SizedBox height={"184px"}/>
            <Row>
                <Spacer flex={1} direction={"horizontal"}/>
                <Styled.Button onClick={handleClose}>
                    <H1 color={theme.colorSystem.white} text={"종료하기"}/>
                </Styled.Button>
            </Row>
        </Styled.Container>
    )
}