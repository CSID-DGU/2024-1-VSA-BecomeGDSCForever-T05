import {ParticipatedModeullakState} from "@/interfaces/states/ParticipatedModeullakState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchParticipatedModeullak} from "@/apis/modeullak";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ParticipatedModeullakStatePayload = ParticipatedModeullakState & {
    loading: boolean;
    error: string | null;
}

const initialState: ParticipatedModeullakStatePayload = {
    modeullak_id: null,
    modeullak_title: null,
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

                const response = action.payload as ResponseWrapper<ParticipatedModeullakState>

                if (response.success) {
                    state.modeullak_id = response.data!.modeullak_id;
                    state.modeullak_title = response.data!.modeullak_title;
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }
                 
                state.loading = false;
            })
    }
})

export default participatedModeullakSlice.reducer;