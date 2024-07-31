import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AnswerModalState {
    isOpen: boolean;
}

const initialState: AnswerModalState = {
    isOpen: false,
};

const answerModalSlice = createSlice({
    name: "answerModalState",
    initialState,
    reducers: {
        updateAnswerModalState: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        }
    }
})

export const {updateAnswerModalState} = answerModalSlice.actions;
export default answerModalSlice.reducer
