import styled from "styled-components";

interface ContainerProps {
    isCollapsed: boolean;
}

export const Container = styled.div<ContainerProps>`

    min-height: 1080px;

    height: 100vh;

    margin: 0 0 auto 0;

    width: ${(props) => (props.isCollapsed ? '60px' : '240px')};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${({theme}) => theme.colorSystem.secondary["800"]};
    transition: width 0.3s ease;
`;

export const TopMenuBar = styled.div<ContainerProps>`
    padding: 8px 12px;
    display: flex;
    flex-direction: ${(props) => (props.isCollapsed ? 'column' : 'row')};
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
`;

export const BottomMenuBar = styled.div`
    display: flex;
    width: 224px;
    padding: 8px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;

export const DirectoryList = styled.div<ContainerProps>`
    width: ${(props) => (props.isCollapsed ? '60px' : '240px')};
    height: 100%;
    background: ${({theme, isCollapsed}) =>
            isCollapsed ? theme.colorSystem.secondary["800"] : theme.colorSystem.secondary["700"]};
    transition: width 0.3s ease, background-color 0.3s ease;
    text-align: center;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;