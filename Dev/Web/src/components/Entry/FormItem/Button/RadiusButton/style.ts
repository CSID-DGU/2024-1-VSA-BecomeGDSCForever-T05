import styled from "styled-components";

export const Container = styled.button`
    width: 360px;
    height: 68px;
    background-color: ${({theme}) => theme.colorSystem.primary["500"]};
    border-radius: 34px;
    border: none;

    display: flex;
    padding: 19px 0;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    cursor: pointer;

    &:hover {
        background-color: #28a745;
    }
`;