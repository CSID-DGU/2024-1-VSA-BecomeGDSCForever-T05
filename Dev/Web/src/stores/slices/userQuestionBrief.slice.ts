import {UserQuestionBriefState} from "@/interfaces/states/UserQuestionBriefState.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: UserQuestionBriefState[] = []

export const userQuestionBriefSlice = createSlice({
    name: "userQuestionBriefState",
    initialState,
    reducers: {
        updateUserQuestionBrief: (state, action) => {
            return action.payload
        }
    }
})

export const {updateUserQuestionBrief} = userQuestionBriefSlice.actions;
export default userQuestionBriefSlice.reducer;