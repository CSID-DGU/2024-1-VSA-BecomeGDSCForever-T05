import * as Styled from './style';
import MyCalendar from "@/components/Calendar";
import Question from "@/components/Question";
import SizedBox from "@/components/Common/SizedBox";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import Answer from "@/components/Answer";
import Search from "@/components/Search";
import NavBar from "@/components/NavBar";
import Row from "@/components/Common/Row";

export default function Home() {

    const isOpen = useSelector((state: RootState) => state.answerModalState.isOpen);

    return (
        <Styled.Container>
            <NavBar/>
            <SizedBox height={"40px"}/>
            <Search/>
            <SizedBox height={"40px"}/>
            <Row justifyContent={"center"}>
                {isOpen ? <Answer/> : <MyCalendar/>}
                <SizedBox width={"64px"}/>
                <Question/>
            </Row>
        </Styled.Container>
    )
}