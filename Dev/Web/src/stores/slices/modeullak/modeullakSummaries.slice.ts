import {
    copyWith,
    fromJson,
    ModeullakSummaryJson,
    ModeullakSummaryState
} from "@/interfaces/states/modeullak/ModeullakSummaryState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakSummaries} from "@/apis/modeullak";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ModeullakSummariesStatePayload = ModeullakSummaryState & {
    loading: boolean;
    error: string | null;
}

const initialState: ModeullakSummariesStatePayload = {
    id: -1,
    title: "",
    tags: [],
    participationCode: "",
    totalTime: "",
    remainedTime: "",
    isHost: false,
    loading: false,
    error: null
}

export const modeullakSummariesSlice = createSlice({
    name: "modeullakSummariesStaet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakSummaries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakSummaries.fulfilled, (state, action) => {

                const response = action.payload as ResponseWrapper<ModeullakSummaryJson>;

                if (response.success) {
                    const updatedState = fromJson(response.data!);
                    Object.assign(state, copyWith(state, updatedState))
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }

                state.loading = false
            })
    }
})


export default modeullakSummariesSlice.reducer;
