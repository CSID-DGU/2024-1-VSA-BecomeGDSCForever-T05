import * as Styled from './style';
import H0 from "@/components/Common/Font/Heading/H0";
import theme from "@/shared/theme.ts";
import SizedBox from "@/components/Common/SizedBox";
import {useUserQuestionBrief} from "@/hooks/useUserQuestionBrief.ts";
import QuestionBrief from "@/components/Room/UserRoom/QuestionBrief";
import {useState} from "react";
import Row from "@/components/Common/Row";
import Column from "@/components/Common/Column";
import QuestionDetail from "@/components/Room/UserRoom/QuestionDetail";
import AnswerDetail from "@/components/Room/UserRoom/AnswerDetail";
import AnswerInput from "@/components/Room/UserRoom/AnswerInput";

export default function UserRoom() {

    const userQuestionBrief = useUserQuestionBrief();
    const [clickedQuestionId, setClickedQuestionId] = useState<number>(-1);

    const handleClick = (index: number) => () => {
        setClickedQuestionId(index);
    }

    return (
        <Styled.Container>
            <Column>
                <H0 color={theme.colorSystem.primary["900"]} textAlign={"start"} text={"나의 질문"}/>
                <SizedBox height={"32px"}/>
                <Row>
                    <Column width={"800px"}>
                        {
                            userQuestionBrief.map((question, index) => {
                                return (
                                    <>
                                        {
                                            index !== 0 && <SizedBox height={"20px"}/>
                                        }
                                        <QuestionBrief keyword={question.keyword} description={question.description}
                                                       createdAt={question.createdAt}
                                                       isClicked={clickedQuestionId === index}
                                                       onClick={handleClick(index)}/>
                                    </>
                                )
                            })
                        }
                    </Column>
                    <Column>
                        {
                            clickedQuestionId !== -1 && (
                                <>
                                    <QuestionDetail/>
                                    <SizedBox height={"40px"}/>
                                    {/*<AnswerDetail/>*/}
                                    <AnswerInput/>
                                </>
                            )
                        }
                    </Column>
                </Row>
            </Column>
        </Styled.Container>
    )
}