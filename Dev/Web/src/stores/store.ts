import {configureStore} from "@reduxjs/toolkit";
import answerModalSlice from "@/stores/slices/answerModal.slice.ts";
import participatingModeulSlice from "@/stores/slices/modeullak/participatedModeullak.slice.ts";
import keywordModalSlice from "@/stores/slices/keywordModal.slice.ts";
import roomFrameSlice from "@/stores/slices/roomFrame.slice.ts";
import userQuestionBriefSlice from "@/stores/slices/userQuestionBrief.slice.ts";
import modeullakSummariesSlice from "@/stores/slices/modeullak/modeullakSummaries.slice.ts";
import modeullakDetailSlice from "@/stores/slices/modeullak/modeullakDetail.slice.ts";
import modeullakBriefSlice from "@/stores/slices/modeullak/modeullakBrief.slice.ts";
import modeullakCalendarTagSlice from "@/stores/slices/modeullak/modeullakCalendarTag.slice.ts";
import calendarSlice from "@/stores/slices/calendar/calendar.slice.ts";
import modeullakOverviewsSlice from "@/stores/slices/modeullak/modeullakOverviews.slice.ts";
import modeullakUserDialogueSummarySlice from "@/stores/slices/dialogue/modeullakUserDialogueSummary.slice.ts";
import modeullakKeywordSlice from "@/stores/slices/modeullak/modeullakKeyword.slice.ts";
import dialogueDetailSlice from "@/stores/slices/dialogue/dialogueDetail.slice.ts";

export const store = configureStore({
    reducer: {
        // Calendar
        calendarState: calendarSlice,

        // Modeullak
        participatedModeullakState: participatingModeulSlice,
        modeullakCalendarTagState: modeullakCalendarTagSlice,
        modeullakSummariesState: modeullakSummariesSlice,
        modeullakDetailState: modeullakDetailSlice,
        modeullakBriefState: modeullakBriefSlice,
        modeullakOverviewsState: modeullakOverviewsSlice,
        modeullakKeywordState: modeullakKeywordSlice,

        // Dialogue
        modeullakUserDialogueSummaryState: modeullakUserDialogueSummarySlice,
        dialogueDetailState: dialogueDetailSlice,

        // Modal
        answerModalState: answerModalSlice,

        keywordModalState: keywordModalSlice,
        roomFrameState: roomFrameSlice,
        userQuestionBriefState: userQuestionBriefSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;