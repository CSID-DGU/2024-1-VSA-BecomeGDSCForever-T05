import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${({theme}) => theme.colorSystem.secondary["800"]};
`;

export const TopMenuBar = styled.div`
    padding: 8px 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const MiddleMenuBar = styled.div`
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const BottomMenuBar = styled.div`
    display: flex;
    width: 224px;
    padding: 8px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`

export const DirectoryList = styled.div`
    width: 240px;
    height: 932px;
    background: ${({theme}) => theme.colorSystem.secondary["700"]};`