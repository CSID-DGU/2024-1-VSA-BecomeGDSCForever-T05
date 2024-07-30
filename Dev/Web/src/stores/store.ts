import {configureStore} from "@reduxjs/toolkit";
import dateSlice from "@/stores/slices/date.slice.ts";
import answerModalSlice from "@/stores/slices/answerModal.slice.ts";

export const store = configureStore({
    reducer: {
        // Add reducers here
        dateState: dateSlice,
        answerModalState: answerModalSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;