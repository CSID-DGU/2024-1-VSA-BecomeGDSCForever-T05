import {
    fromJson,
    ModeullakUserDialogueTemporarySummaryJson,
    ModeullakUserDialogueTemporarySummaryState
} from "@/interfaces/states/dialogue/ModeullakUserDialogueTemporarySummaryState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakUserDialogueTemporarySummary} from "@/apis/dialogue";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ModeullakUserDialogueTemporarySummaryStatePayload = {
    dialogues: ModeullakUserDialogueTemporarySummaryState[];
    loading: boolean;
    error: string | null;
}

interface JsonWrapper {
    dialogues: ModeullakUserDialogueTemporarySummaryJson[];
}

const initialState: ModeullakUserDialogueTemporarySummaryStatePayload = {
    dialogues: [],
    loading: false,
    error: null,
}

export const modeullakUserDialogueTemporarySummarySlice = createSlice({
    name: "modeullakUserDialogueTemporarySummary",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakUserDialogueTemporarySummary.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakUserDialogueTemporarySummary.fulfilled, (state, action) => {

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

export default modeullakUserDialogueTemporarySummarySlice.reducer;