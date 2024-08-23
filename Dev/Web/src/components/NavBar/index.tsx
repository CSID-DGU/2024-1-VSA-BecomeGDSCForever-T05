import React from "react";
import * as Styled from "./style.ts"
import theme from "@/shared/theme.ts";
import FilledLeaf from "@/assets/icons/FilledLeaf.svg"
import ProfileImage from "@/components/Common/ProfileImage";
import DefaultProfile from "@/assets/icons/Profile/DefaultProfile.svg"
import H3 from "@/components/Common/Font/Heading/H3";
import JoinStateTag from "@/components/NavBar/JoinStateTag";
import {useParticipatedModeullak} from "@/hooks/modeullak/useParticipatedModeullak.ts";
import {useNavigate} from "react-router-dom";
import {CONSTANT} from "@/constants/Constant.ts";
import HomeLogo from "@/assets/icons/Logo/HomeLogo.svg";

const NavBar: React.FC = () => {

    const participatedModeullak = useParticipatedModeullak();
    const navigate = useNavigate();

    const onLogoClick = (): void => {
        // reload
        window.location.reload();
        navigate(CONSTANT.ROUTER.HOME);
    }

    const onProfileCLick = (): void => {
        alert("profile clicked!");
    }

    return (
        <Styled.NavBarContainer>
            <Styled.NavBarLeftSection>
                <ProfileImage src={HomeLogo} alt="Logo" onClick={onLogoClick} width={"195px"} height={"80px"}/>
                <Styled.NavMenuButton>
                    <ProfileImage src={FilledLeaf} width={"28px"} height={"28px"}/>
                    <H3 text={"모들락"} color={theme.colorSystem.secondary["700"]}/>
                </Styled.NavMenuButton>
            </Styled.NavBarLeftSection>
            <Styled.NavBarRightSection>
                {participatedModeullak.modeullakId !== null ?
                    <JoinStateTag text={`${participatedModeullak.modeullakTitle} 참여 중`}
                                  id={participatedModeullak.modeullakId}/> : null
                }
                <ProfileImage src={DefaultProfile} onClick={onProfileCLick} width={"58.667px"} height={"58.667px"}/>
            </Styled.NavBarRightSection>
        </Styled.NavBarContainer>
    );
};

export default NavBar;
