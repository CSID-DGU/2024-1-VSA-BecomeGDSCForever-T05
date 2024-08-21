import {
    DialogueKeywordBriefJson,
    DialogueKeywordBriefState,
    fromJson
} from "@/interfaces/states/dialogue/DialogueKeywordBriefState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakKeywordDialogueBrief} from "@/apis/dialogue";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type DialogueKeywordBriefStatePayload = {
    dialogues: DialogueKeywordBriefState[];
    loading: boolean;
    error: string | null;
}

interface JsonWrapper {
    dialogues: DialogueKeywordBriefJson[];
}

const initialState: DialogueKeywordBriefStatePayload = {
    dialogues: [],
    loading: false,
    error: null
}

export const dialogueKeywordBriefSlice = createSlice({
    name: "dialogueKeywordBriefState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakKeywordDialogueBrief.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakKeywordDialogueBrief.fulfilled, (state, action) => {
                const response = action.payload as ResponseWrapper<JsonWrapper>

                if (response.success) {
                    state.dialogues = response.data!.dialogues.map(fromJson);
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }
            })
    }
})

export default dialogueKeywordBriefSlice.reducer;