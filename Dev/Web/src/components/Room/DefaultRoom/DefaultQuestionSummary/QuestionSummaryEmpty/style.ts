import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 20px;

    min-width: 468px;
    max-width: 504px;

    min-height: 168px;

    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.colorSystem.neutral["500"]};
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);
`;