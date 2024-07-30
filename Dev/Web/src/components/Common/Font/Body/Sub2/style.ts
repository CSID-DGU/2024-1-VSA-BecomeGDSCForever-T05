import styled from "styled-components";
import theme from "@/shared/theme.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export const Sub2 = styled.div<FontProps>`
    color: ${(props) => props.color || theme.colorSystem.black};
    font-size: ${theme.fontSystem.sub2.fontSize};
    font-weight: ${theme.fontSystem.sub2.fontWeight};
    line-height: ${theme.fontSystem.sub2.lineHeight};
    text-align: ${(props) => props.textAlign || "center"};
    white-space: pre-wrap;
`;