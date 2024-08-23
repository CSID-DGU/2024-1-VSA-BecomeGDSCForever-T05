import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;

    width: 85vw;

    flex-direction: row;

    .monaco-editor {
        --vscode-focusBorder: transparent;
        border: 1px solid transparent;
    }

`;

export const EditorContainer = styled.div`
    width: 100%;
    min-width: 900px;

    padding: 10px;
`;
