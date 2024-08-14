import {configureStore} from "@reduxjs/toolkit";
import dateSlice from "@/stores/slices/date.slice.ts";
import answerModalSlice from "@/stores/slices/answerModal.slice.ts";
import participatingModeulSlice from "@/stores/slices/participatingModeul.slice.ts";
import questionSummariesSlice from "@/stores/slices/questionSummaries.slice.ts";
import userQuestionChunkSlice from "@/stores/slices/userQuestionChunk.slice.ts";
import questionKeywordChunkSlice from "@/stores/slices/questionKeywordChunk.slice.ts";
import keywordModalSlice from "@/stores/slices/keywordModal.slice.ts";

export const store = configureStore({
    reducer: {
        // Add reducers here
        dateState: dateSlice,
        answerModalState: answerModalSlice,
        participatingModeulState: participatingModeulSlice,
        questionSummariesState: questionSummariesSlice,
        userQuestionChunkState: userQuestionChunkSlice,
        questionKeywordChunkState: questionKeywordChunkSlice,
        keywordModalState: keywordModalSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;