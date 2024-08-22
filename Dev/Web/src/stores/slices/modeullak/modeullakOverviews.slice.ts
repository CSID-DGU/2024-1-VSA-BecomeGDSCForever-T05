import {
    fromJson,
    ModeullakOverviewJson,
    ModeullakOverviewState
} from "@/interfaces/states/modeullak/ModeullakOverviewState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakOverview} from "@/apis/modeullak";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ModeullakOverviewStatePayload = {
    modeullaks: ModeullakOverviewState[];
    loading: boolean;
    error: string | null;
}

interface JsonWrapper {
    modeullaks: ModeullakOverviewJson[];
}

const initialState: ModeullakOverviewStatePayload = {
    modeullaks: [],
    loading: false,
    error: null
}

export const modeullakOverviewsSlice = createSlice({
    name: "modeullakOverviewsState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakOverview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakOverview.fulfilled, (state, action) => {
                const response = action.payload as ResponseWrapper<JsonWrapper>

                if (response) {
                    state.modeullaks = response.data!.modeullaks.map(fromJson);
                    state.error = null;
                } else {
                    state.error = "error";
                }

                state.loading = false
            })
    }
});

export default modeullakOverviewsSlice.reducer;