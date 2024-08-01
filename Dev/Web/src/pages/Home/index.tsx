import * as Styled from './style';
import MyCalendar from "@/components/Calendar";
import Question from "@/components/Question";
import SizedBox from "@/components/Common/SizedBox";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import Answer from "@/components/Answer";
import Search from "@/components/Search";

export default function Home() {

    const isOpen = useSelector((state: RootState) => state.answerModalState.isOpen);

    return (
        <Styled.Container>
            {/* menu bar를 위한 Sized Box */}
            <SizedBox height={"128px"}/>
            <SizedBox height={"40px"}/>
            <Search/>
            <SizedBox height={"40px"}/>
            <Styled.CalendarAndQuestion>
                {isOpen ? <Answer/> : <MyCalendar/>}
                <SizedBox width={"64px"}/>
                <Question/>
            </Styled.CalendarAndQuestion>
        </Styled.Container>
    )
}