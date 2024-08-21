import {
    fromJson,
    ModeullakKeywordJson,
    ModeullakKeywordState
} from "@/interfaces/states/modeullak/modeullakKeywordState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakKeywords} from "@/apis/modeullak";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ModeullakKeywordStatePayload = {
    keywords: ModeullakKeywordState[];
    loading: boolean;
    error: string | null;
}

interface JsonWrapper {
    keywords: ModeullakKeywordJson[];
}

const initialState: ModeullakKeywordStatePayload = {
    keywords: [],
    loading: false,
    error: null
}

export const modeullakKeywordSlice = createSlice({
    name: "modeullakKeywordState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakKeywords.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakKeywords.fulfilled, (state, action) => {
                const response = action.payload as ResponseWrapper<JsonWrapper>

                if (response.success) {
                    state.keywords = response.data!.keywords.map(fromJson);
                    state.error = null;
                } else {
                    state.error = response.message as string;
                }
            })
    }
})

export default modeullakKeywordSlice.reducer;