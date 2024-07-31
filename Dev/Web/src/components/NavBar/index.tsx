import React from "react";
import * as Styled from "./style.ts"


const NavBar: React.FC = () => {


    return (
        <Styled.NavBarContainer>
            <Styled.NavBarLeftSection>
                <Styled.Icon/>
                <Styled.NavMenuButton/>
            </Styled.NavBarLeftSection>
            <Styled.NavBarRightSection>
                <Styled.ParticipatingGroup>sasdasjdnqjwfn</Styled.ParticipatingGroup>
                <Styled.Profile/>
            </Styled.NavBarRightSection>
        </Styled.NavBarContainer>
    );
};

export default NavBar;
