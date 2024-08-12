import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SelectedDateState} from "@/interfaces/states/SelectedDateState.ts";

const initialState: SelectedDateState = {
    selectedDate: new Date(),
};

const dateSlice = createSlice({
    name: "dateState",
    initialState,
    reducers: {
        updateDate: (state, action: PayloadAction<Date>) => {
            state.selectedDate = action.payload;
        },
    },
});

export const {updateDate} = dateSlice.actions;
export default dateSlice.reducer;
