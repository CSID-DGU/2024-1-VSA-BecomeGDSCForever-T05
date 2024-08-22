import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectedStorageId: ""
}

export const selectedStorageIdSlice = createSlice({
    name: "selectedStorageId",
    initialState,
    reducers: {
        updateSelectedStorageId: (state, action) => {
            state.selectedStorageId = action.payload;
        }
    }
})

export const {updateSelectedStorageId} = selectedStorageIdSlice.actions;
export default selectedStorageIdSlice.reducer;