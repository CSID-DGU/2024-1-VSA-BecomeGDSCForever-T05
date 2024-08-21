import {
    copyWith,
    fromJson,
    ModeullakBriefJson,
    ModeullakBriefState
} from "@/interfaces/states/modeullak/ModeullakBriefState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";
import {fetchModeullakBrief} from "@/apis/modeullak";

type ModeullakBriefStatePayload = ModeullakBriefState & {
    loading: boolean;
    error: string | null;
}

const initialState: ModeullakBriefStatePayload = {
    id: -1,
    title: "",
    tags: [],
    remainedHour: -1,
    remainedMinute: -1,
    loading: false,
    error: null
}

export const modeullakBriefSlice = createSlice({
    name: "modeullakBriefState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakBrief.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakBrief.fulfilled, (state, action) => {

                const response = action.payload as ResponseWrapper<ModeullakBriefJson>;

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

export default modeullakBriefSlice.reducer;