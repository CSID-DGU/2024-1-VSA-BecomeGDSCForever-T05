import * as Styled from './style';
import MyCalendar from "@/components/Calendar";
import QuestionSummary from "../../components/QuestionSummary";
import SizedBox from "@/components/Common/SizedBox";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import QuestionDetail from "../../components/QuestionDetail";
import Search from "@/components/Search";
import NavBar from "@/components/NavBar";
import Row from "@/components/Common/Row";
import KeywordModal from "@/components/QuestionDetail/KeywordModal";

export default function Home() {

    const isOpen = useSelector((state: RootState) => state.answerModalState.isOpen);
    const keywordModalState = useSelector((state: RootState) => state.keywordModalState.isOpen);

    return (
        <Styled.Container>
            <NavBar/>
            <SizedBox height={"40px"}/>
            <Search/>
            <SizedBox height={"40px"}/>
            <Row justifyContent={"center"}>
                {isOpen ? <QuestionDetail/> : <MyCalendar/>}
                <SizedBox width={"64px"}/>
                <QuestionSummary/>
            </Row>
            {
                keywordModalState && <KeywordModal/>
            }
        </Styled.Container>
    )
}