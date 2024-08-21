import * as Styled from "@/components/ModeullakOverview/ModeullakOverviewItem/ModeullakOverviewItemTag/style.ts";
import Sub3 from "@/components/Common/Font/Body/Sub3";
import theme from "@/shared/theme.ts";

interface props {
    color?: string;
    text?: string;
}

export default function RoomTag(props: props) {
    return (
        <Styled.Container color={props.color}>
            <Sub3 color={theme.colorSystem.black} text={props.text}/>
        </Styled.Container>
    )
}