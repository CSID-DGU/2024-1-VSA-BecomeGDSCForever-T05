import {createSlice} from "@reduxjs/toolkit";
import {AnswerModalState} from "@/interfaces/states/modal/AnswerModalState.ts";

const initialState: AnswerModalState = {
    isOpen: false,
    modeullakId: -1
};

const answerModalSlice = createSlice({
    name: "answerModalState",
    initialState,
    reducers: {
        updateAnswerModalState: (state, action) => {
            state.isOpen = action.payload.isOpen;
            state.modeullakId = action.payload.modeullakId;
        }
    }
})

export const {updateAnswerModalState} = answerModalSlice.actions;
export default answerModalSlice.reducer
