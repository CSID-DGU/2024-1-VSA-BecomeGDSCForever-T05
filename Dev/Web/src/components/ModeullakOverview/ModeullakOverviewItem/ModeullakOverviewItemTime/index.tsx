import H4 from "@/components/Common/Font/Heading/H4";
import theme from "@/shared/theme.ts";

interface props {
    startedAt: string;
    endedAt: string;
}

export default function ModeullakOverviewItemTime(props: props) {
    return (
        <H4 color={theme.colorSystem.neutral["500"]} textAlign={"right"}
            text={`${props.startedAt} ~ ${props.endedAt}`}/>
    );
}