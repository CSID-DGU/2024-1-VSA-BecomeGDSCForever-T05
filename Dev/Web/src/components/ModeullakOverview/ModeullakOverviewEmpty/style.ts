import styled from "styled-components";
import theme from "@/shared/theme.ts";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colorSystem.neutral["200"]};
    color: ${theme.colorSystem.neutral["500"]};

    border-radius: 12px;
`;