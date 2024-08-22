import {
    fromJson,
    ModeullakCalendarTagJson,
    ModeullakCalendarTagState
} from "@/interfaces/states/modeullak/ModeullakCalendarTagState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakCalendarTags} from "@/apis/modeullak";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type modeullakCalendarTagStatePayload = {
    tags: ModeullakCalendarTagState[];
    loading: boolean;
    error: string | null;
}

interface JsonWrapper {
    tags: ModeullakCalendarTagJson[];
}

const initialState: modeullakCalendarTagStatePayload = {
    tags: [],
    loading: false,
    error: null
}

export const modeullakCalendarTagSlice = createSlice({
    name: "modeullakCalendarTagState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakCalendarTags.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakCalendarTags.fulfilled, (state, action) => {
                const response = action.payload as ResponseWrapper<JsonWrapper>

                if (response.success) {
                    state.tags = response.data!.tags.map(fromJson);
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }

                state.loading = false;
            })
    }
})

export default modeullakCalendarTagSlice.reducer;