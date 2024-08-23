import styled from "styled-components";

export const TreeContainer = styled.ul<{ level: number }>`
    padding-left: ${(props) => props.level * 10}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 6px;
`;

export const TreeItem = styled.li<{ isDirectory: boolean }>`
    list-style-type: ${(props) => (props.isDirectory ? "disc" : "none")};
    cursor: pointer;
    font-weight: ${(props) => (props.isDirectory ? "bold" : "normal")};
    padding-left: ${(props) => (props.isDirectory ? "0" : "20px")};
    display: contents;
`;