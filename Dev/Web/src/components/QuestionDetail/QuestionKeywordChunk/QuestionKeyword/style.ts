import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 344px;
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.colorSystem.neutral["200"]};
    padding: 20px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;