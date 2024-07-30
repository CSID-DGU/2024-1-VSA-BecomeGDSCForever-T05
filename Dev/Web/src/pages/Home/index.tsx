import * as Styled from './style';
import MyCalendar from "@/components/Calendar";
import Question from "@/components/Question";
import SizedBox from "@/components/Common/SizedBox";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import Answer from "@/components/Answer";

export default function Home() {

    const isOpen = useSelector((state: RootState) => state.answerModalState.isOpen);

    return (
        <Styled.Container>
            {isOpen ? <Answer/> : <MyCalendar/>}
            <SizedBox width={"64px"}/>
            <Question/>
        </Styled.Container>
    )
}