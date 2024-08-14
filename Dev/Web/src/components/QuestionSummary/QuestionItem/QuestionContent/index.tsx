import theme from "@/shared/theme.ts";
import Sub3 from "@/components/Common/Font/Body/Sub3";

interface props {
    text: string;
}

export default function QuestionContent(props: props) {
    return (
        <Sub3 textAlign={"left"} color={theme.colorSystem.black} text={props.text}/>
    )
}