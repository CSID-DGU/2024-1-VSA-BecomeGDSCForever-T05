import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isHost: false
}

export const hostSlice = createSlice({
    name: "hostState",
    initialState,
    reducers: {
        updateHostState: (state, action) => {
            state.isHost = action.payload;
        }
    }
})

export const {updateHostState} = hostSlice.actions;
export default hostSlice.reducer;