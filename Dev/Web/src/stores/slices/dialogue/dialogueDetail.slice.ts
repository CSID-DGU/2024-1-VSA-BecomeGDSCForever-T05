import {
    copyWith,
    DialogueDetailJson,
    DialogueDetailState,
    fromJson
} from "@/interfaces/states/dialogue/DialogueDetailState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchDialogueDetail} from "@/apis/dialogue";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type DialogueDetailStatePayload = DialogueDetailState & {
    loading: boolean;
    error: string | null;
}

const initialState: DialogueDetailStatePayload = {
    id: 0,
    questionShortCode: "",
    questionLongCode: "",
    questionContent: "",
    askedAt: "",
    loading: false,
    error: null
}

export const dialogueDetailSlice = createSlice({
    name: "dialogueDetailState",
    initialState,
    reducers: {
        resetDialogueDetailState: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDialogueDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDialogueDetail.fulfilled, (state, action) => {
                const response = action.payload as ResponseWrapper<DialogueDetailJson>;

                if (response.success) {
                    const updatedState = fromJson(response.data!);
                    Object.assign(state, copyWith(state, updatedState));
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }

                state.loading = false;
            })
    }
})

export const {resetDialogueDetailState} = dialogueDetailSlice.actions;
export default dialogueDetailSlice.reducer;