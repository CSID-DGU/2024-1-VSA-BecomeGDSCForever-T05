import styled from "styled-components";

interface props {
    color?: string;
}

export const Container = styled.div<props>`
    background-color: ${(props) => props.color || "#f1f1f1"};
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-radius: 8px;
`;