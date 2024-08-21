import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    & > div {
        flex: 1 1 calc(33.33% - 20px);
        box-sizing: border-box;
    }

    &::after {
        content: "";
        flex: 1 1 calc(33.33% - 20px);
        box-sizing: border-box;
    }
`;