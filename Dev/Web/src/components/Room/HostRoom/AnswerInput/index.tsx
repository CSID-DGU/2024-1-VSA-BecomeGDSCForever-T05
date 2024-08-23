import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import Padding from "@/components/Common/Padding";
import theme from "@/shared/theme.ts";
import * as Styled from "./style.ts";
import React, {useEffect, useRef, useState} from "react";
import {createDialogueAnswer} from "@/apis/dialogue";
import Alert from "@/components/Common/Alert";

interface props {
    dialogueId: number;
}

export default function AnswerInput(props: props) {

    const [text, setText] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [text]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }

    const handleButtonClick = async () => {
        try {
            await createDialogueAnswer(props.dialogueId, text);
            setText("");
            window.location.reload();

        } catch (error) {
            setIsAlertOpen(true);
            setAlertMessage("답변을 등록하는데 실패했습니다.");
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Tab") {
            event.preventDefault();

            const textarea = textareaRef.current;

            if (textarea) {
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;

                setText(
                    text.substring(0, start) + "    " + text.substring(end)
                );

                setTimeout(() => {
                    textarea.selectionStart = textarea.selectionEnd = start + 4;
                }, 0);
            }
        }
    };

    return (
        <Row>
            <Spacer flex={1} direction={"horizontal"}/>
            <Padding all={"20px"} backgroundColor={theme.colorSystem.white}
                     borderColor={theme.colorSystem.neutral["300"]} border={"1px solid"} borderRadius={"12px"}
                     width={"800px"}>
                <Styled.Container ref={textareaRef} value={text} onChange={handleChange} onKeyDown={handleKeyDown}/>
                <Row>
                    <Spacer flex={1} direction={"horizontal"}/>
                    <Styled.Button onClick={handleButtonClick}>답변하기</Styled.Button>
                </Row>
            </Padding>
            {
                isAlertOpen && (
                    <Alert title={alertMessage} onClick={() => setIsAlertOpen(false)}/>
                )
            }
        </Row>
    )
}