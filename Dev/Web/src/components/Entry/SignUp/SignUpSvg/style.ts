import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 1080px;
    width: 760px;
    background-color: ${({ theme }) => theme.colorSystem.neutral["100"]};
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Arrow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    position: relative;
    padding-left: 32px;
`;



