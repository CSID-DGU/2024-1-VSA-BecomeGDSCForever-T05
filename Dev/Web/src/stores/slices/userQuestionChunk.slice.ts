import {UserQuestionChunkState} from "@/interfaces/states/UserQuestionChunkState.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: UserQuestionChunkState[] = [];

export const userQuestionChunkSlice = createSlice({
    name: "userQuestionChunkState",
    initialState,
    reducers: {
        updateUserQuestionChunkState: (state, action: PayloadAction<UserQuestionChunkState[]>) => {
            state.splice(0, state.length, ...action.payload);
        }
    }
});

export const {updateUserQuestionChunkState} = userQuestionChunkSlice.actions;
export default userQuestionChunkSlice.reducer;