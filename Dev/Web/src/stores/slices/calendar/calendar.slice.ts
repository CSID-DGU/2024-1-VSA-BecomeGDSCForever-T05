import {createSlice} from "@reduxjs/toolkit";
import {CalendarState} from "@/interfaces/states/calendar/CalendarState.ts";
import {convertDateToString} from "@/utils/dateTimeUtil.ts";

const initialState: CalendarState = {
    today: convertDateToString(new Date()),
    selectedDate: convertDateToString(new Date()),
    startedAt: convertDateToString(new Date(new Date().getFullYear(), new Date().getMonth(), 1)),
    endedAt: convertDateToString(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)),
}

const calendarSlice = createSlice({
    name: "calendarState",
    initialState,
    reducers: {
        updateSelectedDate(state, action) {
            state.selectedDate = action.payload;
        },
        updateStartedAtAndEndedAt(state, action) {
            state.startedAt = action.payload.startedAt;
            state.endedAt = action.payload.endedAt;
        }
    },
});

export const {updateSelectedDate, updateStartedAtAndEndedAt} = calendarSlice.actions;
export default calendarSlice.reducer;
