import Sub2 from "@/components/Common/Font/Body/Sub2/index.tsx";
import * as Styled from "./style.ts";
import H3 from "@/components/Common/Font/Heading/H3";
import SizedBox from "@/components/Common/SizedBox";
import theme from "@/shared/theme.ts";
import {AppDispatch} from "@/stores/store.ts";
import {useDispatch} from "react-redux";
import {updateKeywordModal} from "@/stores/slices/modal/keywordModal.slice.ts";

interface props {
    id: number;
    keyword: string;
    question: string;
    answerCount: number;
}

export default function QuestionKeyword(props: props) {

    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        dispatch(updateKeywordModal({
            isOpen: true,
            type: "keyword",
            keyword: props.keyword,
            dialogueId: props.id
        }))
    }

    return (
        <Styled.Container onClick={handleClick}>
            <H3 text={props.keyword} textAlign={"left"}/>
            <SizedBox height={"20px"}/>
            <Sub2 text={props.question} color={theme.colorSystem.neutral["600"]} textAlign={"left"}/>
            <SizedBox height={"20px"}/>
            <Sub2 text={`${props.answerCount}개의 답변`} color={theme.colorSystem.neutral["500"]}
                  textAlign={"right"}/>
        </Styled.Container>
    )
}