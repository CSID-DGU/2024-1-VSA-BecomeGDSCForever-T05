import styled from "styled-components";

export const Container = styled.button`
    width: 180px;
    height: 60px;
    background-color: ${({theme}) => theme.colorSystem.primary["500"]};
    border-radius: 12px;
    border: none;

    display: flex;
    padding: 15px 24px;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #28a745;
    }
`;