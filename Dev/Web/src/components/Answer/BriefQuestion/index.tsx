import Padding from "@/components/Common/Padding";
import theme from "@/shared/theme.ts";
import Sub3 from "@/components/Common/Font/Body/Sub3";
import SizedBox from "@/components/Common/SizedBox";
import * as Styled from "./style";
import Row from "@/components/Common/Row";
import Sub1 from "@/components/Common/Font/Body/Sub1";
import Column from "@/components/Common/Column";

export default function BriefQuestion() {

    const question = "int a = 10; // 변수 선언\n" + "int *b = &a; // 포인터 변수 선언\n\n" + "int c = *b; // 포인터 변수가 가리키는 값 할당\n" + "printf(\"%d\", c); // 10 출력\n" + "return 0;";
    const answer = "질문이 3가지 있습니다!!\n\n1) int a = 10; 문장은 변수 a를 선언하고 초기화합니다. 이 변수의 초기값은 무엇이며, 이 변수의 주소를 어떻게 얻을 수 있나요?\n\n2) int *ptr; 문장은 포인터 ptr을 선언합니다. 이 포인터의 초기값은 무엇인가요. 그리고 이 포인터가 무엇을 가리키도록 할 수 있나요?\n\n3) ptr = &a; 문장은 포인터 ptr에 변수 a의 주소를 할당합니다. 이 문장이 수행된 후 포인터 ptr은 무엇을 가리키게 되며, 포인터를 사용하여 변수 a의 값에 어떻게 접근할 수 있나요?"

    return (
        <Row>
            <Padding all={"20px"} backgroundColor={theme.colorSystem.neutral["100"]}
                     borderColor={theme.colorSystem.neutral["300"]} border={"1px solid"} borderRadius={"12px"}
                     width={"800px"}>
                <Styled.Container>
                    <Padding all={"12px"} backgroundColor={theme.colorSystem.neutral["300"]} width={"776px"}
                             borderRadius={"12px"}>
                        <Sub3 textAlign={"left"} color={theme.colorSystem.black} text={question}/>
                    </Padding>
                    <SizedBox height={"12px"}/>
                    <Sub3 textAlign={"left"} color={theme.colorSystem.black}
                          text={answer}/>
                </Styled.Container>
            </Padding>
            <SizedBox width={"12px"}/>
            <Column>
                {/*Todo: Sub1 Text from Bottom*/}
                <SizedBox height={"336px"}/>
                <Sub1 color={theme.colorSystem.neutral["500"]} text={"유사한 질문이 N개 있어요!!"}/>
            </Column>
        </Row>
    )
}