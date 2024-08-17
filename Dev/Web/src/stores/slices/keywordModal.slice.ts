import {KeywordModalState} from "@/interfaces/states/KeywordModalState.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: KeywordModalState = {
    isOpen: false,
    type: "none"
}

const keywordModalSlice = createSlice({
    name: "keywordModalState",
    initialState,
    reducers: {
        updateKeywordModalState: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        updateKeywordModalType: (state, action: PayloadAction<"user" | "keyword" | "none">) => {
            state.type = action.payload;
        }
    }
})

export const {updateKeywordModalState, updateKeywordModalType} = keywordModalSlice.actions;
export default keywordModalSlice.reducer