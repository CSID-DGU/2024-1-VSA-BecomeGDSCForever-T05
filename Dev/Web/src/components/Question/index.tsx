import * as Styled from './style';
import QuestionHeader from "@/components/Question/QuestionHeader";
import SizedBox from "@/components/Common/SizedBox";
import QuestionItem from "@/components/Question/QuestionItem";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/stores/store.ts";
import {updateAnswerModalState} from "@/stores/slices/answerModal.slice.ts";
import Column from "@/components/Common/Column";

export default function Question() {

    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        dispatch(updateAnswerModalState(true))
    }

    return (
        <Styled.Container>
            <Column>
                <QuestionHeader/>
                <SizedBox height={"20px"}/>
                {[...Array(10)].map((_, i) => {
                    if (i === 0) {
                        return <QuestionItem key={i} isFirst={true} onClick={() => handleClick()}/>;
                    } else if (i === 9) {
                        return <QuestionItem key={i} isLast={true} onClick={() => handleClick()}/>;
                    } else {
                        return <QuestionItem key={i} onClick={() => handleClick()}/>;
                    }
                })}
            </Column>
        </Styled.Container>
    );
}
