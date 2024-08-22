import * as Styled from './style';
import H0 from "@/components/Common/Font/Heading/H0";
import theme from "@/shared/theme.ts";
import Row from "@/components/Common/Row";
import RoomTag from "@/components/Room/DefaultRoom/DefaultRoomHeader/RoomTag";
import SizedBox from "@/components/Common/SizedBox";
import Spacer from "@/components/Common/Spacer";
import H1 from "@/components/Common/Font/Heading/H1";
import SvgButton from "@/components/Common/SvgButton";
import CopyButton from "@/assets/icons/CopyButton.svg";
import {useState} from "react";
import Alert from "@/components/Common/Alert";

interface props {
    title: string,
    tags: string[],
    code: string
}

export default function DefaultRoomHeader(props: props) {

    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(props.code);
            setIsAlertOpen(true);
            setAlertMessage("복사되었습니다.");
        } catch (error) {
            setIsAlertOpen(true);
            setAlertMessage("복사에 실패하였습니다.");
        }
    }

    return (
        <Styled.Container>
            <SizedBox height={"20px"}/>
            <H0 color={theme.colorSystem.primary["900"]} textAlign={"start"} text={`${props.title} 모들락`}/>
            <SizedBox height={"12px"}/>
            <Row justifyContent={"center"}>
                {
                    props.tags.map((tag) => (
                        <>
                            <RoomTag color={theme.colorSystem.secondary["200"]} text={tag}/>
                            <SizedBox width={"12px"}/>
                        </>
                    ))
                }
                <Spacer flex={1} direction={"horizontal"}/>
                <H1 color={theme.colorSystem.neutral["500"]} text={props.code}/>
                <SizedBox width={"8px"}/>
                <SvgButton src={CopyButton} width={"30px"} height={"30px"} onClick={handleCopy}/>
            </Row>
            {
                isAlertOpen && (
                    <Alert title={alertMessage} onClick={() => setIsAlertOpen(false)}/>
                )
            }
        </Styled.Container>
    )
}