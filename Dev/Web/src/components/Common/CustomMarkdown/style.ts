import styled from "styled-components";
import theme from "@/shared/theme.ts";
import {Light as SyntaxHighlighter} from "react-syntax-highlighter";

export const MarkdownContainer = styled.div<{ longCode?: boolean }>`

    & h1, & h2, & h3, & h4, & h5, & h6 {

    }

    & h1 {
        font-size: 1.5rem;
        line-height: 1.875rem;
        font-weight: 700;
    }

    & h2 {
        font-size: 1.375rem;
        line-height: 1.719rem;
        font-weight: 700;
    }

    & h3 {
        font-size: 1.25rem;
        line-height: 1.563rem;
        font-weight: 700;
    }

    & h4 {
        font-size: 1.125rem;
        line-height: 1.406rem;
        font-weight: 700;
    }

    & h5 {
        font-size: 1rem;
        line-height: 1.25rem;
        font-weight: 700;
    }

    & h6 {
        font-size: 1rem;
        line-height: 1.25rem;
        font-weight: 500;
    }

    & p {
        margin-top: 12px;
        font-size: 0.75rem;
        line-height: 1.25rem;
        font-weight: 500;
    }

    & a {
        color: #0366d6;
        text-decoration: none;
    }

    & code {
        padding: 0;
        margin: 0;
        font-size: 80%;
    }

    & pre {
        margin: 0;
    }

    ${({longCode}) =>
            longCode &&
            `
        &:hover {
            cursor: pointer;
        }
    `}
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: start;
`;

export const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
    border-radius: 12px;
    background-color: ${theme.colorSystem.neutral["200"]} !important;
    padding: 20px !important;

    & code {
        padding: 0;
    }
`;

export const CodeContainer = styled.div`
    padding: 20px;
    background-color: ${theme.colorSystem.neutral["200"]};
    border-radius: 12px;

    position: relative;

    z-index: 1;
`;
