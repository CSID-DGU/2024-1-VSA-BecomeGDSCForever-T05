import {
    fromJson,
    ParticipatedModeullakJson,
    ParticipatedModeullakState
} from "@/interfaces/states/modeullak/ParticipatedModeullakState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchParticipatedModeullak} from "@/apis/modeullak";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ParticipatedModeullakStatePayload = ParticipatedModeullakState & {
    loading: boolean;
    error: string | null;
}

const initialState: ParticipatedModeullakStatePayload = {
    modeullakId: null,
    modeullakTitle: null,
    loading: false,
    error: null
};

const participatedModeullakSlice = createSlice({
    name: "participatedModeullakState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchParticipatedModeullak.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchParticipatedModeullak.fulfilled, (state, action) => {

                const response = action.payload as ResponseWrapper<ParticipatedModeullakJson>

                if (response.success) {
                    const updatedState = fromJson(response.data!);
                    Object.assign(state, updatedState);
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }

                state.loading = false;
            })
    }
})

export default participatedModeullakSlice.reducer;