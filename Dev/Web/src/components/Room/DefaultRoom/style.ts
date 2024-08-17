import styled from "styled-components";
import theme from "@/shared/theme.ts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    min-width: 1600px;
    min-height: 1080px;

    position: relative;

    padding: 20px;
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px 0;
    width: 440px;
    height: 30px;

    border-radius: 20px;
    background-color: ${theme.colorSystem.red["400"]};

    cursor: pointer;

    position: absolute;

    bottom: 40px;
    right: 40px;
`;