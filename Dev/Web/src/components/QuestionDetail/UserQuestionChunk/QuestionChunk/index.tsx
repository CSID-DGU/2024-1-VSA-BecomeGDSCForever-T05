import * as Styled from "./style.ts";
import Row from "@/components/Common/Row";
import H3 from "@/components/Common/Font/Heading/H3";
import Spacer from "@/components/Common/Spacer";
import H6 from "@/components/Common/Font/Heading/H6";
import theme from "@/shared/theme.ts";
import SizedBox from "@/components/Common/SizedBox";
import Sub3 from "@/components/Common/Font/Body/Sub3/index.tsx";
import {AppDispatch} from "@/stores/store.ts";
import {useDispatch} from "react-redux";
import {updateKeywordModalState, updateKeywordModalType} from "@/stores/slices/keywordModal.slice.ts";

interface props {
    id: number;
    keyword: string;
    answerBy: "AI 답변" | "조교 답변";
    question: string;
}

export default function QuestionChunk(props: props) {

    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        dispatch(updateKeywordModalState(true));
        dispatch(updateKeywordModalType("user"))
    }

    return (
        <Styled.Container onClick={handleClick}>
            <Row>
                <H3 text={props.keyword}/>
                <Spacer flex={1} direction={"horizontal"}/>
                <H6 text={props.answerBy} color={theme.colorSystem.neutral["500"]}/>
            </Row>
            <SizedBox height={"20px"}/>
            <Sub3
                text={props.question}
                color={theme.colorSystem.neutral["700"]} textAlign={"left"}/>
        </Styled.Container>
    )
}