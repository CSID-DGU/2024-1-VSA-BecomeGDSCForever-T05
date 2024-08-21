import {
    fromJson,
    ModeullakUserDialogueSummaryJson,
    ModeullakUserDialogueSummaryState
} from "@/interfaces/states/dialogue/ModeullakUserDialogueSummaryState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakUserDialogueSummary} from "@/apis/dialogue";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ModeullakUserDialogueSummaryStatePayload = {
    dialogues: ModeullakUserDialogueSummaryState[];
    loading: boolean;
    error: string | null;
}

interface JsonWrapper {
    dialogues: ModeullakUserDialogueSummaryJson[];
}

const initialState: ModeullakUserDialogueSummaryStatePayload = {
    dialogues: [],
    loading: false,
    error: null
}

export const modeullakUserDialogueSummarySlice = createSlice({
    name: "modeullakUserDialogueSummaryState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakUserDialogueSummary.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakUserDialogueSummary.fulfilled, (state, action) => {
                const response = action.payload as ResponseWrapper<JsonWrapper>

                if (response.success) {
                    state.dialogues = response.data!.dialogues.map(fromJson);
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }
            })
    }
});

export default modeullakUserDialogueSummarySlice.reducer;
