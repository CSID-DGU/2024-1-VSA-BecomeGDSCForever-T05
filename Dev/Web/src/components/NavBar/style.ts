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
    
    background: blanchedalmond;
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
    border: 1px solid black;
`

export const Icon = styled.div`
    display: flex;
    height: 80px;
    width: 195px;
    padding: 10px 0px;
    align-items: center;
    gap: 12px;
    background: black;
`

export const NavMenuButton = styled.div`
    display: flex;
    width: 200px;
    height: 60px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: darkred;
`

export const ParticipatingGroup = styled.div`
    display: flex;
    padding: 10.5px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: ${theme.colorSystem.secondary["500"]};
    color: #ffffff;
`

export const Profile = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    justify-content: flex-end;
    align-items: center;
    background: aqua;
`
