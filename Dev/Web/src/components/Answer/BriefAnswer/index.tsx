import Padding from "@/components/Common/Padding";
import theme from "@/shared/theme.ts";
import Sub3 from "@/components/Common/Font/Body/Sub3";
import SizedBox from "@/components/Common/SizedBox";
import Row from "@/components/Common/Row";

interface props {
    isAdmin?: boolean
}

export default function BriefAnswer(props: props) {

    const answer = "안녕하세요 기초프로그래밍 조교입니다.\n" +
        "\n" +
        "질문에 대한 답변은 다음과 같습니다.\n" +
        "\n" +
        "1번 - 변수 a의 초기값은 10입니다. 변수 a의 주소는 주소 연산자 &를 사용하여 얻을 수 있습니다. 예를 들어, &a는 변수 a의 메모리 주소를 반환합니다.\n" +
        "\n" +
        "2번 - int *ptr; 문장을 통해 선언된 포인터 ptr의 초기값은 정의되지 않으며, 이는 쓰레기 값(garbage value)을 가지고 있을 수 있습니다. 이 포인터는 정수형 변수의 주소를 가리킬 수 있습니다. 예를 들어, ptr = &a;와 같이 변수 a의 주소를 할당하여 ptr이 변수 a를 가리키도록 할 수 있습니다.\n" +
        "\n" +
        "3번 - ptr = &a; 문장이 수행된 후 포인터 ptr은 변수 a의 주소를 가리키게 됩니다. 이를 통해 ptr은 a의 값을 간접적으로 참조할 수 있습니다. 포인터를 사용하여 변수 a의 값에 접근하려면 간접 참조 연산자 *를 사용합니다. 예를 들어, *ptr은 변수 a의 값을 반환합니다. 또한, *ptr = 20;과 같이 포인터를 통해 변수 a의 값을 변경할 수도 있습니다."

    return (
        <Row>
            <SizedBox width={"260px"}/>
            <Padding all={"20px"} borderRadius={"20px"}
                     backgroundColor={props.isAdmin ? theme.colorSystem.secondary["100"] : theme.colorSystem.neutral["100"]}
                     border={"1px solid"} borderColor={theme.colorSystem.neutral["300"]} width={"800px"}>
                <Sub3 textAlign={"left"} color={theme.colorSystem.black} text={answer}/>
            </Padding>
        </Row>
    )
}