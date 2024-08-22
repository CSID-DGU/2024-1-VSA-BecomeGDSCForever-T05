import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    max-width: 1600px;
    min-height: 1080px;

    position: relative;

    padding: 20px;
`;


export const Empty = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 20px;

    width: 508px;

    height: 160px;

    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.colorSystem.neutral["500"]};
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);

`;