import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: auto;
    border: none;
    resize: none; /* 사용자가 크기를 조정하지 못하도록 설정 */
    outline: none; /* 포커스 시 나타나는 기본 외곽선을 제거 */
    font-size: ${(props) => props.theme.fontSystem.sub1.fontSize};
    line-height: ${(props) => props.theme.fontSystem.sub1.lineHeight};
    font-weight: ${(props) => props.theme.fontSystem.sub1.fontWeight};
    overflow-wrap: break-word; /* 단어가 긴 경우에도 줄바꿈 처리 */
    word-wrap: break-word; /* 단어가 긴 경우에도 줄바꿈 처리 (호환성) */
    box-sizing: border-box; /* padding과 border를 포함한 크기를 설정 */
`;

export const Button = styled.button`
    width: 73px;

    padding: 4px 12px;

    border: none;

    background-color: ${(props) => props.theme.colorSystem.primary["600"]};
    color: ${(props) => props.theme.colorSystem.white};

    font-size: ${(props) => props.theme.fontSystem.sub1.fontSize};
    line-height: ${(props) => props.theme.fontSystem.sub1.lineHeight};
    font-weight: ${(props) => props.theme.fontSystem.sub1.fontWeight};

    border-radius: 20px;

    cursor: pointer;
`;