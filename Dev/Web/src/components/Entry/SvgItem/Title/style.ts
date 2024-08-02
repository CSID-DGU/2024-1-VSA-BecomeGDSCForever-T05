import styled from "styled-components";

interface TitleProps{
    width?: string;
    height?: string;
}

export const Container = styled.img<TitleProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
    width: ${({width}) => width};
    height: ${({height}) => height};
`;



