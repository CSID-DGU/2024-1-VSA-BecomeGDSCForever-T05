import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;

    flex-direction: row;

    .monaco-editor {
        --vscode-focusBorder: transparent;
        border: 1px solid transparent; // ide 테두리 없애기

`;

export const EditorContainer = styled.div`
    width: 100%;

    min-width: 1080px;

    padding: 10px;
`;

export const StyledEditorWrapper = styled.div`
    /* monaco-editor 클래스를 가진 요소에 대한 스타일 적용 */

    .monaco-editor {
        --vscode-focusBorder: transparent;
        border: 2px solid transparent; /* 기본적인 스타일 적용 */

        &.focused {
            border-color: #007acc; /* 에디터가 포커스된 상태일 때 테두리 색상 변경 */
        }

        /* 추가적인 스타일링이 필요한 경우, 아래에 더 많은 규칙을 추가할 수 있습니다. */
    }
;
`