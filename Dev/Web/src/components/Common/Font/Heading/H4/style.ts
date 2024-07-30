import styled from "styled-components";
import theme from "@/shared/theme.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export const H4 = styled.div<FontProps>`
    color: ${(props) => props.color || theme.colorSystem.black};
    font-size: ${theme.fontSystem.h4.fontSize};
    font-weight: ${theme.fontSystem.h4.fontWeight};
    line-height: ${theme.fontSystem.h4.lineHeight};
    text-align: ${(props) => props.textAlign || "center"};
    white-space: pre-wrap;
`;