import {KeywordModalState} from "@/interfaces/states/modal/KeywordModalState.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: KeywordModalState = {
    isOpen: false,
    type: "none",
    keyword: "",
    dialogueId: -1,
    modeullakId: -1
}

const keywordModalSlice = createSlice({
    name: "keywordModalState",
    initialState,
    reducers: {
        updateKeywordModal: (state, action) => {
            state.isOpen = action.payload.isOpen;
            state.type = action.payload.type;
            state.keyword = action.payload.keyword;
            state.dialogueId = action.payload.dialogueId;
        },
        updateKeywordModalModeullakId: (state, action) => {
            state.modeullakId = action.payload;
        }
    }
})

export const {updateKeywordModal, updateKeywordModalModeullakId} = keywordModalSlice.actions;
export default keywordModalSlice.reducer