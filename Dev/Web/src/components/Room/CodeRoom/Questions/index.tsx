import React, {useEffect, useState} from "react";
import * as Styled from "./style.ts";
import * as monaco from "monaco-editor";
import Column from "@/components/Common/Column";
import SizedBox from "@/components/Common/SizedBox";
import H1 from "@/components/Common/Font/Heading/H1";
import SvgButton from "@/components/Common/SvgButton";
import BlackDoubleRightArrow from "@/assets/icons/CodeIde/BlackDoubleRightArrow.svg";
import theme from "@/shared/theme.ts";
import Sub1 from "@/components/Common/Font/Body/Sub1";
import CustomMarkdown from "@/components/Common/CustomMarkdown";

interface Question {
    text: string;
    question: string;
    answers: string[];
}

interface props {
    editorRef: React.RefObject<monaco.editor.IStandaloneCodeEditor>;
    language: string;
    highlightedText: string | null;
}

export default function Questions(props: props) {
    const [question, setQuestion] = useState("");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const handleAddQuestion = () => {
        if (!props.highlightedText || props.highlightedText.trim() === "") {
            alert("코드를 선택해주세요.");
            return;
        }

        const codeBlock = `\`\`\`${props.language}\n${props.highlightedText}\n\`\`\``;

        setQuestions([...questions, {text: codeBlock, question, answers: []}]);
        setQuestion("");
    };

    useEffect(() => {
        if (!props.highlightedText) {
            setQuestion("");
        }
    }, [props.highlightedText]);

    const handleQuestionKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddQuestion();
        }
    };

    return (
        <Styled.Container isVisible={isVisible}>
            {props.highlightedText && (
                <Styled.QuestionInputContainer>
                    <Column alignItems={"flex-start"}>
                        <SvgButton src={BlackDoubleRightArrow} width={"24px"} height={"24px"}
                                   onClick={() => setIsVisible(false)}/>
                        <SizedBox height={"20px"}/>
                        <H1 text={"질문하기"}/>
                    </Column>
                    <SizedBox width={"auto"} height={"40px"}/>
                    <Styled.MarkdownContainer>
                        <CustomMarkdown shortCode={`\`\`\`${props.language}\n${props.highlightedText}\n\`\`\``}/>
                    </Styled.MarkdownContainer>
                    <Styled.Input
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="질문을 입력하세요"
                        onKeyDown={() => handleQuestionKeyPress}
                    />
                    <SizedBox width={"auto"} height={"40px"}/>
                    <Styled.ButtonWrapper>
                        <Styled.Button onClick={handleAddQuestion}>
                            <Sub1 text={"질문 남기기"} color={theme.colorSystem.white}/>
                        </Styled.Button>
                    </Styled.ButtonWrapper>
                </Styled.QuestionInputContainer>
            )}
        </Styled.Container>
    );
}
