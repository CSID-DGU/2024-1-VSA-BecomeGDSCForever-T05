import * as Styled from './style';
import Sub3 from "@/components/Common/Font/Body/Sub3";
import theme from "@/shared/theme.ts";
import SizedBox from "@/components/Common/SizedBox";
import {convertStringToTime} from "@/utils/dateTimeUtil.ts";

interface props {
    total: string;
    remained: string;
}

export default function DefaultRoomProgress(props: props) {

    const totalMinute = convertStringToTime(props.total);
    const remainedMinute = convertStringToTime(props.remained);

    const hour = props.remained.split(":")[0];
    const minute = props.remained.split(":")[1];

    const progress = (remainedMinute / totalMinute) * 100;

    return (
        <Styled.Container>
            <Sub3 color={theme.colorSystem.neutral["500"]} textAlign={"start"} text={"남은 시간"}/>
            <SizedBox height={"8px"}/>
            <Styled.StackContainer>
                <Styled.Progress/>
                <Styled.ProgressTime>{hour}시간 {minute}분</Styled.ProgressTime>
                <Styled.GreenProgress style={{width: `${progress}%`, color: `${theme.colorSystem.primary["500"]}`}}/>
            </Styled.StackContainer>
            <SizedBox height={"20px"}/>
        </Styled.Container>
    )
}