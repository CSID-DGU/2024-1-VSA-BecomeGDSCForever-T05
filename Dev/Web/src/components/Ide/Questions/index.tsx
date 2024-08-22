import React, {useEffect, useState} from "react";
import * as Styled from "./style";
import * as monaco from "monaco-editor";
import ReactMarkdown from "react-markdown";
import {Light as SyntaxHighlighter} from "react-syntax-highlighter";
import {githubGist} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Column from "@/components/Common/Column";
import SizedBox from "@/components/Common/SizedBox";
import H1 from "@/components/Common/Font/Heading/H1";
import SvgButton from "@/components/Common/SvgButton";
import BlackDoubleRightArrow from "@/assets/icons/CodeIde/BlackDoubleRightArrow.svg";
import theme from "@/shared/theme.ts";
import Sub1 from "@/components/Common/Font/Body/Sub1";

interface QuestionsProps {
    editorRef: React.RefObject<monaco.editor.IStandaloneCodeEditor>;
    language: string;
    highlightedText: string | null;
}

interface Question {
    text: string;
    question: string;
    answers: string[];
}


const Questions: React.FC<QuestionsProps> = ({highlightedText, language}) => {
    const [question, setQuestion] = useState("");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [answer, setAnswer] = useState("");
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const handleAddQuestion = () => {
        if (!highlightedText || highlightedText.trim() === "") {
            alert("코드를 선택해주세요.");
            return;
        }

        const codeBlock = `\`\`\`${language}\n${highlightedText}\n\`\`\``;

        setQuestions([...questions, {text: codeBlock, question, answers: []}]);
        setQuestion("");
    };

    const handleAddAnswer = () => {
        if (selectedQuestionIndex !== null) {
            const updatedQuestions = [...questions];
            updatedQuestions[selectedQuestionIndex].answers.push(answer);
            setQuestions(updatedQuestions);
            setAnswer("");
        }
    };

    useEffect(() => {
        if (!highlightedText) {
            setQuestion("");
        }
    }, [highlightedText]);

    const handleQuestionKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddQuestion();
        }
    };

    const handleAnswerKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddAnswer();
        }
    };

    return (
        <Styled.Container isVisible={isVisible}>
            {highlightedText && (
                <Styled.QuestionInputContainer>
                    <Column alignItems={"flex-start"} width={"200px"}>
                        <SvgButton src={BlackDoubleRightArrow} onClick={() => setIsVisible(false)}/>
                        <SizedBox height={"20px"} width={"auto"}/>
                        <H1 text={"질문하기"}/>
                    </Column>
                    <SizedBox width={"auto"} height={"40px"}/>
                    <Styled.MarkdownContainer>
                        <ReactMarkdown
                            children={`\`\`\`${language}\n${highlightedText}\n\`\`\``}
                            components={{
                                code({node, inline, className, children, ...props}) {
                                    const match = /language-(\w+)/.exec(className || "");
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={githubGist}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, "")}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        />
                    </Styled.MarkdownContainer>
                    <Styled.Input
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="질문을 입력하세요"
                        onKeyDown={handleQuestionKeyPress}
                    />
                    <SizedBox width={"auto"} height={"40px"}/>
                    <Styled.ButtonWrapper>
                        <Styled.Button onClick={handleAddQuestion}>
                            <Sub1 text={"질문 남기기"} color={theme.colorSystem.white}/>
                        </Styled.Button>
                    </Styled.ButtonWrapper>
                </Styled.QuestionInputContainer>
            )}
            <div>
                {questions.map((item, index) => (
                    <Styled.QuestionBox key={index}>
                        <Styled.MarkdownContainer>
                            <ReactMarkdown
                                children={item.text}
                                components={{
                                    code({node, inline, className, children, ...props}) {
                                        const match = /language-(\w+)/.exec(className || "");
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={solarizedlight}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, "")}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        );
                                    },
                                }}
                            />
                        </Styled.MarkdownContainer>
                        <Styled.QuestionText>{item.question}</Styled.QuestionText>
                        {item.answers.map((ans, ansIndex) => (
                            <Styled.AnswerText key={ansIndex}>{ans}</Styled.AnswerText>
                        ))}
                        <Styled.Input
                            placeholder="답변을 입력하세요"
                            value={selectedQuestionIndex === index ? answer : ""}
                            onChange={(e) => setAnswer(e.target.value)}
                            onFocus={() => setSelectedQuestionIndex(index)}
                            onKeyDown={handleAnswerKeyPress}
                        />
                        <Styled.Button
                            onClick={handleAddAnswer}
                            disabled={selectedQuestionIndex !== index}
                        >
                            답변 달기
                        </Styled.Button>
                    </Styled.QuestionBox>
                ))}
            </div>
        </Styled.Container>
    );
};

export default Questions;