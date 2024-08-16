import styled from "styled-components";

export const Container = styled.div<{ color: string }>`
    background-color: ${(props) => props.color || "#f1f1f1"};
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-radius: 8px;
`;