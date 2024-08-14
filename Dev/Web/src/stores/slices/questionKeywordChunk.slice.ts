import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {QuestionKeywordChunkState} from "@/interfaces/states/QuestionKeywordChunkState.ts";

const initialState: QuestionKeywordChunkState[] = [];

export const questionKeywordChunkSlice = createSlice({
    name: "questionKeywordChunkState",
    initialState,
    reducers: {
        updateQuestionKeywordChunkState: (state, action: PayloadAction<QuestionKeywordChunkState[]>) => {
            state.splice(0, state.length, ...action.payload);
        }
    }
});

export const {updateQuestionKeywordChunkState} = questionKeywordChunkSlice.actions;
export default questionKeywordChunkSlice.reducer;