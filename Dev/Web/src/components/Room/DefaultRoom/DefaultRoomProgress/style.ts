import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StackContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const Progress = styled.div`
    width: 100%;
    height: 40px;

    position: absolute;

    border-radius: 20px;
    background-color: #f0f0f0;
`;

export const ProgressTime = styled.div`
    position: absolute;

    // horizontal center
    left: 50%;

    font-size: ${props => props.theme.fontSystem.h1.fontSize};
    font-weight: ${props => props.theme.fontSystem.h1.fontWeight};
    line-height: ${props => props.theme.fontSystem.h1.lineHeight};

    color: ${props => props.theme.colorSystem.black};
`;

export const GreenProgress = styled.div`
    width: 100%;
    height: 40px;

    position: absolute;

    border-radius: 20px;
    background-color: ${props => props.theme.colorSystem.primary["500"]};
`;