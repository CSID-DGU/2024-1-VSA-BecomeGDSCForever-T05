import * as Styled from './style';
import MyCalendar from "@/components/Calendar";
import Question from "@/components/Question";
import SizedBox from "@/components/Common/SizedBox";

export default function Home() {
    return (
        <Styled.Container>
            <MyCalendar/>
            <SizedBox width={"64px"}/>
            <Question/>
        </Styled.Container>
    )
}