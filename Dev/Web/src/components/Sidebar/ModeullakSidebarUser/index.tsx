import * as Styled from "./style.ts";
import ProfileImage from "@/components/Common/ProfileImage";
import DefaultProfile from "@/assets/icons/Profile/DefaultProfile.svg"
import SizedBox from "@/components/Common/SizedBox";
import {useModeullakUserBrief} from "@/hooks/modeullak/useModeullakUserBrief.ts";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {updateRoomFrameState} from "@/stores/slices/global/roomFrame.slice.ts";
import {ModeullakUserBriefState} from "@/interfaces/states/modeullak/ModeullakUserBriefState.ts";
import {updateSelectedUser} from "@/stores/slices/global/selectedUserId.slice.ts";

interface props {
    modeullakId: number;
}

export default function ModeullakSidebarUser(props: props) {

    const modeullakUserBrief = useModeullakUserBrief(props.modeullakId);

    /* --------------------------------------------------------------------------- */
    /* Dispatch ------------------------------------------------------------------ */
    /* --------------------------------------------------------------------------- */
    const dispatch = useDispatch<AppDispatch>();
    const isHost = useSelector((state: RootState) => state.hostState.isHost);

    const handleUserProfileClick = (user: ModeullakUserBriefState) => {
        if (isHost) {
            dispatch(updateRoomFrameState("host"));
            dispatch(updateSelectedUser(user));
        }

        dispatch(updateSelectedUser(user));
    }

    const handleSelfUserProfileClick = () => {
        if (isHost) {
            dispatch(updateRoomFrameState("default"));
            dispatch(updateSelectedUser(modeullakUserBrief.selfUser));
        }

        dispatch(updateSelectedUser(modeullakUserBrief.selfUser));
    }

    return (
        <Styled.Container>
            <SizedBox height={"18x"}/>
            <Styled.MyProfile>
                <ProfileImage src={DefaultProfile} width={"56px"} height={"56px"}
                              onClick={handleSelfUserProfileClick}/>
            </Styled.MyProfile>
            <Styled.Hr/>
            <Styled.UserProfileList>
                {
                    modeullakUserBrief.otherUsers.map((user) => {
                        return (
                            <Styled.UserProfile key={user.id} onClick={() => handleUserProfileClick(user)}>
                                <ProfileImage src={DefaultProfile} width={"56px"} height={"56px"}
                                              alt={"Profile"} new={true}/>
                            </Styled.UserProfile>
                        )
                    })
                }
            </Styled.UserProfileList>
        </Styled.Container>
    );
}