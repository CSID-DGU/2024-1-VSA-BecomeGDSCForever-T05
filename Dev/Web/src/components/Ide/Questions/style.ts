import styled from "styled-components";
import theme from "@/shared/theme.ts";

// const slideInFromRight = keyframes`
//     from {
//         transform: translateX(100%);
//         opacity: 0;
//     }
//     to {
//         transform: translateX(0);
//         opacity: 1;
//     }
// `;
//
// const slideOutToRight = keyframes`
//     from {
//         transform: translateX(0);
//         opacity: 1;
//     }
//     to {
//         transform: translateX(100%);
//         opacity: 0;
//     }
// `;
//
// export const Container = styled.div<{ isClose: boolean }>`
//     width: 600px;
//     height: 100%;
//     position: absolute;
//     z-index: 3000;
//     display: flex;
//     flex-direction: column;
//     padding: 16px;
//
//     background-color: ${theme.colorSystem.neutral["600"]};
//
//         //background-color: ${theme.colorSystem.white};
//
//     border: ${({isClose}) => (isClose ? `1px solid red` : "none")};
//
//     right: 0;
//     animation: ${({isClose}) =>
//             isClose
//                     ? css`
//                         ${slideInFromRight} 0.5s ease forwards;
//                     `
//                     : css`
//                         ${slideOutToRight} 0.5s ease forwards;
//                     `};
//
//     box-shadow: 0px 2px 6px 0px rgba(98, 98, 114, 0.2);
// `;
//
// export const Overlay = styled.div<{ isClose: boolean }>`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 9990;
//     display: ${({isClose}) => (isClose ? "flex" : "none")};
//     justify-content: flex-end;
//     align-items: center;
//     transition: visibility 0.5s ease;
// `;
//

export const Container = styled.div<{ isVisible: boolean }>`
    display: ${({isVisible}) => (isVisible ? "flex" : "none")};

    width: 60%;
    max-height: 1080px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 16px;
`;

export const QuestionInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 16px;
`;

export const MarkdownContainer = styled.div`
    //background-color: #1a202c;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 8px;
`;

export const Input = styled.textarea`
    padding: 8px;
    font-size: 1rem;
    margin-top: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
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

export const QuestionBox = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
`;

export const QuestionText = styled.p`
    font-weight: bold;
    margin-top: 8px;
    white-space: pre-wrap;
`;

export const AnswerText = styled.p`
    margin-left: 16px;
    margin-top: 4px;
    white-space: pre-wrap;
`;