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

export default function DefaultRoomHeader() {

    const code = "ABCD1234";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            alert("복사되었습니다.");
        } catch (error) {
            console.error("Copy failed", error);
        }
    }

    return (
        <Styled.Container>
            <H0 color={theme.colorSystem.primary["900"]} textAlign={"start"} text={"자료구조 13주차 실습 모들락"}/>
            <Row justifyContent={"center"}>
                <RoomTag color={theme.colorSystem.secondary["200"]} text={"C"}/>
                <SizedBox width={"12px"}/>
                <RoomTag color={theme.colorSystem.secondary["200"]} text={"Pointer"}/>
                <SizedBox width={"12px"}/>
                <RoomTag color={theme.colorSystem.secondary["200"]} text={"Memory"}/>
                <Spacer flex={1} direction={"horizontal"}/>
                <H1 color={theme.colorSystem.neutral["500"]} text={code}/>
                <SizedBox width={"8px"}/>
                <SvgButton src={CopyButton} width={"30px"} height={"30px"} onClick={handleCopy}/>
            </Row>
        </Styled.Container>
    )
}