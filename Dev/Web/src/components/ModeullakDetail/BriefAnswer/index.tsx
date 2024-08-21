import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import theme from "@/shared/theme.ts";
import * as Styled from "./style";
import Padding from "@/components/Common/Padding";
import CustomMarkdown from "@/components/Common/CustomMarkdown";

export default function BriefAnswer() {


    const answer = "```cpp\n" +
        "const abc\n" +
        "```\n" +
        "\n" +
        "const로 변수를 선언하는 것은 좋은 습관입니다.\n" +
        "\n" +
        "***const***는 불변해야해요!";

    return (
        <Row>
            <Spacer flex={1} direction={"horizontal"}/>
            <Padding all={"20px"} backgroundColor={theme.colorSystem.neutral["100"]}
                     borderColor={theme.colorSystem.neutral["300"]} border={"1px solid"} borderRadius={"12px"}
                     width={"800px"}>
                <Styled.Container>
                    <CustomMarkdown shortCode={answer}/>
                </Styled.Container>
            </Padding>
        </Row>
    )
}