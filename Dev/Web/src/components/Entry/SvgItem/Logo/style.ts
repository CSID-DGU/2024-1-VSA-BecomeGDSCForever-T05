import styled from "styled-components";

interface LogoProps {
    width?: string;
    height?: string;
}

export const Container = styled.img<LogoProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: ${({width}) => width};
    height: ${({height}) => height};
    flex-shrink: 0;
`;


