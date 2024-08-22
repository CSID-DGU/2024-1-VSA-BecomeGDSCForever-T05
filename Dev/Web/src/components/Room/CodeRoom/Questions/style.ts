import styled, {css, keyframes} from "styled-components";
import theme from "@/shared/theme.ts";

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: 1000;
`;

const slideInFromRight = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translate(0);
        opacity: 1;
    }
`;

const slideOutToRight = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
`;

export const Container = styled.div<{ isVisible: boolean }>`
    width: 600px;
    height: 100%;
    display: flex;
    padding: 20px;

    flex-direction: column;

    background-color: ${theme.colorSystem.white};

    position: relative;

    right: 0;

    animation: ${({isVisible}) =>
            isVisible
                    ? css`
                        ${slideInFromRight} 0.5s ease forwards
                    `
                    : css`
                        ${slideOutToRight} 0.5s ease forwards
                    `};

    box-shadow: 0 2px 6px 0 rgba(98, 98, 114, 0.2);
`;


export const QuestionInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 16px;
`;

export const MarkdownContainer = styled.div`
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 8px;
`;

export const Input = styled.textarea`
    padding: 8px;
    font-size: 1rem;
    margin-top: 8px;
    border: none;
    resize: none;
    min-height: 100px;
    max-height: 450px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const Button = styled.button`
    display: flex;
    width: 100px;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    background: ${theme.colorSystem.primary["600"]};
    border: none;
    border-radius: 4px;
`;
