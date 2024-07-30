import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface DateState {
    date: Date;
}

const initialState: DateState = {
    date: new Date(),
};

const dateSlice = createSlice({
    name: "dateState",
    initialState,
    reducers: {
        updateDate: (state, action: PayloadAction<Date>) => {
            state.date = action.payload;
        },
    },
});

export const {updateDate} = dateSlice.actions;
export default dateSlice.reducer;
