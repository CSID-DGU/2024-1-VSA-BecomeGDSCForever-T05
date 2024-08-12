import {ParticipatingModeulState} from "@/interfaces/states/ParticipatingModeulState.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ParticipatingModeulState = {
    isParticipating: true,
    id: 1,
    name: "자료구조 12강 실습",
};

const participatingModeulSlice = createSlice({
    name: "participatingModeulState",
    initialState,
    reducers: {
        updateParticipatingModeulState: (state, action: PayloadAction<ParticipatingModeulState>) => {
            state.isParticipating = action.payload.isParticipating;
            state.name = action.payload.name;
        }
    }
})

export const {updateParticipatingModeulState} = participatingModeulSlice.actions;
export default participatingModeulSlice.reducer;