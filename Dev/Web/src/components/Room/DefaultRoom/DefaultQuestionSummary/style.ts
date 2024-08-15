import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const GridView = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 20px;
`;