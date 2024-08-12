import * as Styled from "./style.ts";
import ProfileImage from "@/components/Common/ProfileImage";
import DefaultProfile from "@/assets/icons/Profile/DefaultProfile.svg"


export default function IDEMulti() {
    return (
        <Styled.Container>
            <Styled.MyProfile>
                <ProfileImage src={DefaultProfile} width={"56px"} height={"56px"}/>
            </Styled.MyProfile>
            <Styled.Hr/>
            <div>User's Profile</div>
            <div>User's Profile</div>
            <div>User's Profile</div>
            <div>User's Profile</div>
            <div>User's Profile</div>
        </Styled.Container>
    );
}