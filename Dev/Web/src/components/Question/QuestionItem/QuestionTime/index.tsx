import H4 from "@/components/Common/Font/Heading/H4";
import theme from "@/shared/theme.ts";

export default function QuestionTime() {
    return (
        <H4 color={theme.colorSystem.neutral["500"]} textAlign={"right"} text={"13:00 ~ 17:00"}/>
    );
}