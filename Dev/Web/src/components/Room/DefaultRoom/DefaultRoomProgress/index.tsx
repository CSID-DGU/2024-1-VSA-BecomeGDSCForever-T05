import * as Styled from './style';
import Sub3 from "@/components/Common/Font/Body/Sub3";
import theme from "@/shared/theme.ts";
import SizedBox from "@/components/Common/SizedBox";

export default function DefaultRoomProgress() {
    return (
        <Styled.Container>
            <Sub3 color={theme.colorSystem.neutral["500"]} textAlign={"start"} text={"남은 시간"}/>
            <SizedBox height={"8px"}/>
            <Styled.Progress/>
        </Styled.Container>
    )
}