import React, {useRef, useState} from "react";
import * as Styled from "./style.ts"
import {Editor, OnMount} from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import LanguageSelector from "@/components/Ide/LanguageSelector";
import Questions from "@/components/Ide/Questions";
import {CODE_SNIPPETS} from "@/components/Ide/CODE_SNIPPETS.ts";

interface FileItem {
    type: "FILE" | "DIRECTORY";
    name: string;
    children?: FileItem[];
}


const initialFileStructure: FileItem[] = [
    {
        type: "DIRECTORY",
        name: "components",
        children: [
            {type: "FILE", name: "Button.js"},
            {type: "FILE", name: "ButtonGroup.js"},
            {type: "FILE", name: "Dropdown.js"},
        ],
    },
    {
        type: "DIRECTORY",
        name: "hooks",
        children: [
            {type: "FILE", name: "useFetch.js"},
            {type: "FILE", name: "useLocalStorage.js"},
        ],
    },
    // 추가적인 디렉토리 및 파일들
];

const CodeEditor: React.FC = () => {
    const [fileStructure, setFileStructure] = useState<FileItem[]>(initialFileStructure);
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const [value, setValue] = useState<string>(CODE_SNIPPETS["javascript"]);
    const [language, setLanguage] = useState<string>("javascript");
    const [highlightedText, setHighlightedText] = useState<string | null>(null);

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
        });
    };

    const onSelect = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
        setValue(CODE_SNIPPETS[selectedLanguage] || "");

        if (editorRef.current) {
            const model = editorRef.current.getModel();
            if (model) {
                monaco.editor.setModelLanguage(model, selectedLanguage);
            }
        }
    };


    return (
        <Styled.Container>
            <Styled.EditorContainer>
                <LanguageSelector language={language} onSelect={onSelect}/>
                <Editor
                    height="75vh"
                    theme="vs-dark"
                    defaultValue={CODE_SNIPPETS[language]}
                    language={language}
                    onMount={handleEditorMount}
                    value={value}
                    onChange={(val) => setValue(val || "")}
                />
                <Questions
                    editorRef={editorRef}
                    language={language}
                    highlightedText={highlightedText}
                />
            </Styled.EditorContainer>
        </Styled.Container>
    );
};

export default CodeEditor;