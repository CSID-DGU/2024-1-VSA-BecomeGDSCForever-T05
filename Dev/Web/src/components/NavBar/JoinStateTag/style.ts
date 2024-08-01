import styled from "styled-components";
import theme from "@/shared/theme.ts";

export const Container = styled.div`
    display: flex;
    padding: 10.5px 20px;
    justify-content: center;
    align-items: center;

    border-radius: 12px;
    background: ${theme.colorSystem.secondary["500"]};
    color: ${theme.colorSystem.white};
`