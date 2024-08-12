import React from "react";
import * as Styled from "./style.ts"
import theme from "@/shared/theme.ts";
import Logo from "@/assets/icons/Logo/HomeLogo.svg";
import FilledLeaf from "@/assets/icons/FilledLeaf.svg"
import DefaultProfile from "@/assets/icons/Profile/DefaultProfile.svg"
import H3 from "@/components/Common/Font/Heading/H3";
import JoinStateTag from "@/components/NavBar/JoinStateTag";
import {useParticipatingModeul} from "@/hooks/useParticipatingModeul.ts";

const NavBar: React.FC = () => {

    const participatingModeulState = useParticipatingModeul();

    const onLogoClick = (): void => {
        alert("logo clicked!");
    }

    const onProfileCLick = (): void => {
        alert("profile clicked!");
    }

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
                {participatingModeulState.isParticipating ?
                    <JoinStateTag text={`${participatingModeulState.name} 참여 중`}
                                  id={participatingModeulState.id}/> : null
                }
                <Styled.Icon src={DefaultProfile} onClick={onProfileCLick} width={"58.667px"} height={"58.667px"}/>
            </Styled.NavBarRightSection>
        </Styled.NavBarContainer>
    );
};

export default NavBar;
