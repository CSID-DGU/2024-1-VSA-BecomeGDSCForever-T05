import styled from "styled-components";
import theme from "@/shared/theme.ts";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8000;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin-top: 2rem;
`;

export const Container = styled.div`
    width: 30rem;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 16px;
    background-color: ${theme.colorSystem.white};
    z-index: 8100;
`;

export const StyledButton = styled.button`
    width: 100%;
    border-radius: 20px;
    padding: 1rem 2rem;
    cursor: pointer;

    background-color: ${theme.colorSystem.primary["500"]};
`;