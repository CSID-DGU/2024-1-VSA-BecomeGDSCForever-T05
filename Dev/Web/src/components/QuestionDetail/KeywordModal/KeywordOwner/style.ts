import styled from "styled-components";

export const Container = styled.div<{ isClicked: boolean }>`
    display: flex;
    width: 215px;
    padding: 20px;
    flex-direction: row;
    align-items: center;

    border-radius: 12px;
    border: 1px solid ${props => props.isClicked ? props.theme.colorSystem.secondary["500"] : props.theme.colorSystem.neutral["300"]};

    cursor: pointer;
`;