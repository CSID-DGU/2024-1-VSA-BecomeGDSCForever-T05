import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;

    min-width: 468px;

    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.colorSystem.neutral["500"]};
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);
`;