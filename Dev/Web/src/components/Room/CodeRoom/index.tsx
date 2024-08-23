import React, {useEffect, useRef, useState} from "react";
import * as monaco from "monaco-editor";
import {Editor, OnMount} from "@monaco-editor/react";
import * as Styled from "./style.ts";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import Questions from "@/components/Room/CodeRoom/Questions";
import {fetchModeullakStorageContent, updateModeullakStorageContent} from "@/apis/storage";
import Alert from "@/components/Common/Alert";

interface props {
    modeullakId: number;
}

export default function CodeRoom(props: props) {

    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const [highlightedText, setHighlightedText] = useState<string | null>(null);

    const isHost = useSelector((state: RootState) => state.hostState.isHost);

    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");

    const extension = useSelector((state: RootState) => state.selectedLanguageState.selectedLanguage);

    const storageId = useSelector((state: RootState) => state.selectedStorageState.selectedStorageId);

    const [value, setValue] = useState<string>("");

    const handleSaveCode = async () => {
        try {
            await updateModeullakStorageContent(storageId, value);
        } catch (error) {
            setIsAlertOpen(true);
            setAlertMessage(error.response.data.error.message);
        }
    }

    const fetchInitialValue = async () => {
        try {
            const response = await fetchModeullakStorageContent(props.modeullakId, storageId);

            if (response.success) {
                setValue(response.data.content);
            }
        } catch (error) {
            setIsAlertOpen(true);
            setAlertMessage(error.response.data.error.message);
        }
    }

    useEffect(() => {
        fetchInitialValue().then(r => r);
    }, [storageId]);

    useEffect(() => {
        const handleSaveShortcut = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "s") {
                event.preventDefault();

                handleSaveCode().then(r => r);
            }
        }

        window.addEventListener("keydown", handleSaveShortcut);

        return () => {
            window.removeEventListener("keydown", handleSaveShortcut);
        }
    }, [value]);

    const handleEditorMount: OnMount = (editor) => {
        editorRef.current = editor;

        editor.focus();

        editor.onMouseUp(() => {
            const selectedText = window.getSelection()?.toString();

            if (selectedText) {
                setHighlightedText(selectedText);
            } else {
                setHighlightedText(null);
            }
        })
    }

    return (
        <Styled.Container>
            <Styled.EditorContainer>
                <Editor
                    height="65vh"
                    theme="vs"
                    defaultValue={value}
                    language={extension}
                    onMount={handleEditorMount}
                    value={value}
                    onChange={(value) => setValue(value)}
                />
            </Styled.EditorContainer>
            {
                highlightedText && isHost &&
                <Questions editorRef={editorRef} language={extension} highlightedText={highlightedText}
                           modeullakId={props.modeullakId} storageId={storageId}/>
            }
            {
                isAlertOpen && (
                    <Alert title={alertMessage} onClick={() => setIsAlertOpen(false)}/>
                )
            }
        </Styled.Container>
    );
}