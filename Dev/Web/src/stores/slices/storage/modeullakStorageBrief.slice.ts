import {
    fromJson,
    ModeullakStorageBriefJson,
    ModeullakStorageBriefState
} from "@/interfaces/states/storage/ModeullakStorageBriefState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakStorageBrief} from "@/apis/storage";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ModeullakStorageBriefStatePayload = {
    storages: ModeullakStorageBriefState[];
    loading: boolean;
    error: string | null;
}

interface JsonWrapper {
    storages: ModeullakStorageBriefJson[];
}

const initialState: ModeullakStorageBriefStatePayload = {
    storages: [],
    loading: false,
    error: null,
};

export const modeullakStorageBriefSlice = createSlice({
    name: "modeullakStorageBriefState",
    initialState,
    reducers: {
        reset: (state) => {
            state.storages = [];
            state.loading = false;
            state.error = null;
        },
        addModeullakStorage: (state, action) => {
            state.storages.push(
                action.payload as ModeullakStorageBriefState
            )
        },
        updateModeullakStorage: (state, action) => {
            state.storages = [];

            for (let i = 0; i < action.payload.length; i++) {
                state.storages.push(
                    action.payload[i] as ModeullakStorageBriefState
                );
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakStorageBrief.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakStorageBrief.fulfilled, (state, action) => {

                const response = action.payload as ResponseWrapper<JsonWrapper>;

                if (response.success) {
                    state.storages = response.data!.storages.map(fromJson);
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }

                state.loading = false;
            })
    }
})

export const {reset, addModeullakStorage, updateModeullakStorage} = modeullakStorageBriefSlice.actions;
export default modeullakStorageBriefSlice.reducer;