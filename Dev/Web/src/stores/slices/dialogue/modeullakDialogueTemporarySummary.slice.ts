import {
    fromJson,
    ModeullakDialogueTemporarySummaryJson,
    ModeullakDialogueTemporarySummaryState
} from "@/interfaces/states/dialogue/ModeullakDialogueTemporarySummaryState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakDialogueTemporarySummary} from "@/apis/dialogue";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ModeullakDialogueTemporarySummaryStatePayload = {
    dialogues: ModeullakDialogueTemporarySummaryState[];
    loading: boolean;
    error: string | null;
}

export const initialState: ModeullakDialogueTemporarySummaryStatePayload = {
    dialogues: [],
    loading: false,
    error: null,
}

interface JsonWrapper {
    dialogues: ModeullakDialogueTemporarySummaryJson[]
}

export const modeullakDialogueTemporarySummarySlice = createSlice({
    name: "modeullakDialogueTemporarySummary",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakDialogueTemporarySummary.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakDialogueTemporarySummary.fulfilled, (state, action) => {

                const response = action.payload as ResponseWrapper<JsonWrapper>;

                if (response.success) {
                    state.dialogues = response.data!.dialogues.map(fromJson);
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }

                state.loading = false;
            });
    }
})

export default modeullakDialogueTemporarySummarySlice.reducer;