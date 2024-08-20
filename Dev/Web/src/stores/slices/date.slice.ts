import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SelectedDateState} from "@/interfaces/states/SelectedDateState.ts";

const today = new Date().toISOString();

const initialState: SelectedDateState = {
    selectedDate: today,
};

const dateSlice = createSlice({
    name: "dateState",
    initialState,
    reducers: {
        updateDate: (state, action: PayloadAction<string>) => {
            state.selectedDate = action.payload;
        },
    },
});

export const {updateDate} = dateSlice.actions;
export default dateSlice.reducer;
