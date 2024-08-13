import styled from "styled-components";
import theme from "@/shared/theme.ts";


export const NavBarContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100vw;
    height: 128px;
    padding: 24px 60px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1.333px solid rgba(195, 212, 233, 0.40);
    background: ${theme.colorSystem.white};
`
export const NavBarLeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
`
export const NavBarRightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

// Icon
export interface IconProps {
    src: string;
    alt?: string;
    height?: string;
    width?: string;
    padding?: string;
}

export const Icon = styled.img<IconProps>`
  display: flex;
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  padding: ${(props) => props.padding || "10px 0px"};
  align-items: center;
  gap: 12px;
    flex-shrink: 0;
`;

export const NavMenuButton = styled.div`
    display: flex;
    width: 200px;
    height: 60px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-bottom: 2px solid ${theme.colorSystem.secondary["700"]};
`
