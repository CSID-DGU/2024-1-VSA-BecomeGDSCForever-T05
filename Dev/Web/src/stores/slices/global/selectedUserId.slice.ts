import {createSlice} from "@reduxjs/toolkit";
import {ModeullakUserBriefState} from "@/interfaces/states/modeullak/ModeullakUserBriefState.ts";

const initialState: ModeullakUserBriefState = {
    id: "",
    nickname: "",
    profileImageUrl: ""
}

export const selectedUserIdSlice = createSlice({
    name: "selectedUserId",
    initialState,
    reducers: {
        updateSelectedUser: (state, action) => {
            state.id = action.payload.id;
            state.nickname = action.payload.nickname;
            state.profileImageUrl = action.payload.profileImageUrl;
        }
    }
})

export const {updateSelectedUser} = selectedUserIdSlice.actions;
export default selectedUserIdSlice.reducer;
