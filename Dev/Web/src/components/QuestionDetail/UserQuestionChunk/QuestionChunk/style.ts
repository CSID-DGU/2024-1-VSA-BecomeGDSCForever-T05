import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 530px;
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.colorSystem.neutral["200"]};
    padding: 20px;
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);
`;