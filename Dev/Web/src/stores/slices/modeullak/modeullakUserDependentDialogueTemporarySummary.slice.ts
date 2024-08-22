import {
    fromJson,
    ModeullakUserDependentDialogueTemporarySummaryJson,
    ModeullakUserDependentDialogueTemporarySummaryState
} from "@/interfaces/states/dialogue/ModeullakUserDependentDialogueTemporarySummaryState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakUserDependentDialogueTemporarySummary} from "@/apis/dialogue";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ModeullakUserDependentDialogueTemporarySummaryStatePayload = {
    dialogues: ModeullakUserDependentDialogueTemporarySummaryState[];
    loading: boolean;
    error: null | string;
}

interface JsonWrapper {
    dialogues: ModeullakUserDependentDialogueTemporarySummaryJson[];
}

const initialState: ModeullakUserDependentDialogueTemporarySummaryStatePayload = {
    dialogues: [],
    loading: false,
    error: null,
}

export const modeullakUserDependentDialogueTemporarySummarySlice = createSlice({
    name: "modeullakUserDependentDialogueTemporarySummary",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakUserDependentDialogueTemporarySummary.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakUserDependentDialogueTemporarySummary.fulfilled, (state, action) => {

                const response = action.payload as ResponseWrapper<JsonWrapper>;

                if (response.success) {
                    state.dialogues = response.data!.dialogues.map(fromJson);
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }
                state.loading = false
            })
    }
})

export default modeullakUserDependentDialogueTemporarySummarySlice.reducer;