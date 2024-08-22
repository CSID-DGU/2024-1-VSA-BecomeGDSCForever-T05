import styled from 'styled-components';

export const Container = styled.div<{ isClicked: boolean }>`
    display: flex;
    flex-direction: column;

    padding: 20px;

    width: 468px;

    border-radius: 12px;
    border: 1px solid ${(props) => props.isClicked ? props.theme.colorSystem.secondary["400"] : props.theme.colorSystem.neutral["500"]};
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);

    cursor: pointer;
`;