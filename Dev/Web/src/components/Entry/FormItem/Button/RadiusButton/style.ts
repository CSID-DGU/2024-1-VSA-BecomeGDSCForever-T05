import styled from "styled-components";

interface ContainerProps {
    backgroundColor: string;
    isValid: boolean;
}

export const Container = styled.button<ContainerProps>`
    width: 360px;
    height: 68px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 34px;
    border: none;

    display: flex;
    padding: 19px 0;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    cursor: ${(props) => props.isValid ? "pointer" : "default"};
`;