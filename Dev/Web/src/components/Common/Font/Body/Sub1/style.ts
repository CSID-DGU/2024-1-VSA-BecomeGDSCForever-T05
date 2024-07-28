import styled from "styled-components";
import theme from "@/shared/theme.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export const Sub1 = styled.div<FontProps>`
    color: ${(props) => props.color || theme.colorSystem.black};
    font-size: ${theme.fontSystem.sub1.fontSize};
    font-weight: ${theme.fontSystem.sub1.fontWeight};
    line-height: ${theme.fontSystem.sub1.lineHeight};
    text-align: ${(props) => props.textAlign || "center"};
`;