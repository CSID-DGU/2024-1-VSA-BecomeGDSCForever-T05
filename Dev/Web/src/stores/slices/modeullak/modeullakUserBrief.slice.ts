import {
    fromJson,
    ModeullakUserBriefJson,
    ModeullakUserBriefState
} from "@/interfaces/states/modeullak/ModeullakUserBriefState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchModeullakUserBrief} from "@/apis/modeullak";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

type ModeullakUserBriefStatePayload = {
    selfUser: ModeullakUserBriefState;
    otherUsers: ModeullakUserBriefState[];
    loading: boolean;
    error: string | null;
}

interface JsonWrapper {
    self_user: ModeullakUserBriefJson;
    other_users: ModeullakUserBriefJson[];
}

const initialState: ModeullakUserBriefStatePayload = {
    selfUser: {
        id: "",
        nickname: "",
        profileImageUrl: "",
    },
    otherUsers: [],
    loading: false,
    error: null
}

export const modeullakUserBriefSlice = createSlice({
    name: "modeullakUserBriefState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchModeullakUserBrief.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchModeullakUserBrief.fulfilled, (state, action) => {

                const response = action.payload as ResponseWrapper<JsonWrapper>;

                if (response.success) {
                    state.selfUser = fromJson(response.data!.self_user);
                    state.otherUsers = response.data!.other_users.map(fromJson);

                    state.error = null;
                } else {
                    state.error = response.message as string;
                }

                state.loading = false
            })
    }
})

export default modeullakUserBriefSlice.reducer;