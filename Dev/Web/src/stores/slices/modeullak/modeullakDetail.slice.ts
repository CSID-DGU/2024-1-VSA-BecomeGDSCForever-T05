import {
    copyWith,
    fromJson,
    ModeullakDetailJson,
    ModeullakDetailState
} from "@/interfaces/states/modeullak/ModeullakDetailState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakDetail} from "@/apis/modeullak";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ModeullakDetailStatePayload = ModeullakDetailState & {
    loading: boolean;
    error: string | null;
}

const initialState: ModeullakDetailStatePayload = {
    id: -1,
    title: "",
    content: "",
    tags: [],
    startedAt: "",
    endedAt: "",
    loading: false,
    error: null
}

export const modeullakDetailSlice = createSlice({
    name: "modeullakDetailState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakDetail.fulfilled, (state, action) => {

                const response = action.payload as ResponseWrapper<ModeullakDetailJson>;

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

export default modeullakDetailSlice.reducer;