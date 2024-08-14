import * as Styled from './style';
import QuestionHeader from "@/components/QuestionSummary/QuestionHeader";
import SizedBox from "@/components/Common/SizedBox";
import QuestionItem from "@/components/QuestionSummary/QuestionItem";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {updateAnswerModalState} from "@/stores/slices/answerModal.slice.ts";
import Column from "@/components/Common/Column";
import {useQuestionSummaries} from "@/hooks/useQuestionSummaries.ts";

export default function QuestionSummary() {

    const dispatch = useDispatch<AppDispatch>();
    const selectedDate = useSelector((state: RootState) => state.dateState.selectedDate);

    const questionSummaries = useQuestionSummaries(selectedDate);

    const handleClick = () => {
        dispatch(updateAnswerModalState(true))
    }

    return (
        <Styled.Container>
            <Column>
                <QuestionHeader/>
                <SizedBox height={"20px"}/>
                {
                    questionSummaries.map((questionSummary, index) => {
                        if (index === 0) {
                            return <QuestionItem key={index} isFirst={true} onClick={() => handleClick()}
                                                 questionSummary={questionSummary}/>;
                        } else if (index === questionSummaries.length - 1) {
                            return <QuestionItem key={index} isLast={true} onClick={() => handleClick()}
                                                 questionSummary={questionSummary}/>;
                        } else {
                            return <QuestionItem key={index} onClick={() => handleClick()}
                                                 questionSummary={questionSummary}/>;
                        }
                    })
                }
            </Column>
        </Styled.Container>
    );
}
