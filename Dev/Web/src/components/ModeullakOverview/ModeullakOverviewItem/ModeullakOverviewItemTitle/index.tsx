import H3 from "@/components/Common/Font/Heading/H3";
import theme from "@/shared/theme.ts";

interface props {
    title: string;
}

export default function ModeullakOverviewItemTitle(props: props) {
    return (
        <H3 color={theme.colorSystem.black} textAlign={"left"} text={props.title}/>
    )
}