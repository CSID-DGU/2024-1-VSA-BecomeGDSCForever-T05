import React from "react";
import * as Styled from "./style.ts"
import theme from "@/shared/theme.ts";
import Logo from "@/assets/icons/Logo/HomeLogo.svg";
import FilledLeaf from "@/assets/icons/FilledLeaf.svg"
import H3 from "@/components/Common/Font/Heading/H3";
import JoinStateTag from "@/components/NavBar/JoinStateTag";

const NavBar: React.FC = () => {
    const onLogoClick = ():void => {
        alert("logo clicked!");
    }

    const isJoined:boolean = true;
    const joinedSpate:string = '자료구조 13강 실습';

    return (
        <Styled.NavBarContainer>
            <Styled.NavBarLeftSection>
                <Styled.Icon src={Logo} alt="Logo" onClick={onLogoClick} width={"195px"} height={"80px"}/>
                <Styled.NavMenuButton>
                    <Styled.Icon src={FilledLeaf} width={"28px"} height={"28px"}/>
                    <H3 text={"모들락"} color={theme.colorSystem.secondary["700"]}/>
                </Styled.NavMenuButton>
            </Styled.NavBarLeftSection>
            <Styled.NavBarRightSection>
                {isJoined?
                    <JoinStateTag text={`${joinedSpate} 모들락 참여 중`}/> : null
                }
                <Styled.Profile/>
            </Styled.NavBarRightSection>
        </Styled.NavBarContainer>
    );
};

export default NavBar;
