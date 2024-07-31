import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

interface props {
    color?: string;
}

export const Line = styled.div<props>`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.color || "#f1f1f1"};
`;