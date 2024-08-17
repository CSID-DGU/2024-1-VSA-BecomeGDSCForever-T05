import {RoomFrameState} from "@/interfaces/states/RoomFrameState.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: RoomFrameState = {
    type: "default"
}

export const roomFrameSlice = createSlice({
    name: "roomFrameState",
    initialState,
    reducers: {
        updateRoomFrameState: (state, action) => {
            state.type = action.payload;
        }
    }
})

export const {updateRoomFrameState} = roomFrameSlice.actions;
export default roomFrameSlice.reducer;