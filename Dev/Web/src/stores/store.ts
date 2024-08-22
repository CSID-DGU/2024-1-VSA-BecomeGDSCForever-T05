import {configureStore} from "@reduxjs/toolkit";
import answerModalSlice from "@/stores/slices/modal/answerModal.slice.ts";
import participatingModeulSlice from "@/stores/slices/modeullak/participatedModeullak.slice.ts";
import keywordModalSlice from "@/stores/slices/modal/keywordModal.slice.ts";
import roomFrameSlice from "@/stores/slices/global/roomFrame.slice.ts";
import modeullakSummariesSlice from "@/stores/slices/modeullak/modeullakSummaries.slice.ts";
import modeullakDetailSlice from "@/stores/slices/modeullak/modeullakDetail.slice.ts";
import modeullakBriefSlice from "@/stores/slices/modeullak/modeullakBrief.slice.ts";
import modeullakCalendarTagSlice from "@/stores/slices/modeullak/modeullakCalendarTag.slice.ts";
import calendarSlice from "@/stores/slices/calendar/calendar.slice.ts";
import modeullakOverviewsSlice from "@/stores/slices/modeullak/modeullakOverviews.slice.ts";
import modeullakUserDialogueSummarySlice from "@/stores/slices/dialogue/modeullakUserDialogueSummary.slice.ts";
import modeullakKeywordSlice from "@/stores/slices/modeullak/modeullakKeyword.slice.ts";
import dialogueDetailSlice from "@/stores/slices/dialogue/dialogueDetail.slice.ts";
import dialogueKeywordBriefSlice from "@/stores/slices/dialogue/dialogueKeyword.slice.ts";
import modeullakDialogueTemporarySummarySlice
    from "@/stores/slices/dialogue/modeullakDialogueTemporarySummary.slice.ts";
import modeullakUserDialogueTemporarySummarySlice
    from "@/stores/slices/dialogue/modeullakUserDialogueTemporarySummary.slice.ts";
import modeullakUserBriefSlice from "@/stores/slices/modeullak/modeullakUserBrief.slice.ts";
import modeullakUserDependentDialogueTemporarySummarySlice
    from "@/stores/slices/modeullak/modeullakUserDependentDialogueTemporarySummary.slice.ts";
import hostSlice from "@/stores/slices/global/host.slice.ts";
import selectedUserIdSlice from "@/stores/slices/global/selectedUserId.slice.ts";
import modeullakStorageBriefSlice from "@/stores/slices/storage/modeullakStorageBrief.slice.ts";
import selectedLanguageSlice from "@/stores/slices/global/selectedLanguage.slice.ts";
import selectedStorageIdSlice from "@/stores/slices/global/selectedStorageId.slice.ts";

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
        modeullakUserBriefState: modeullakUserBriefSlice,

        // Dialogue
        modeullakUserDialogueSummaryState: modeullakUserDialogueSummarySlice,
        dialogueDetailState: dialogueDetailSlice,
        dialogueKeywordBriefState: dialogueKeywordBriefSlice,
        modeullakDialogueTemporarySummaryState: modeullakDialogueTemporarySummarySlice,
        modeullakUserDialogueTemporarySummaryState: modeullakUserDialogueTemporarySummarySlice,
        modeullakUserDependentDialogueSummaryState: modeullakUserDependentDialogueTemporarySummarySlice,

        // Storage
        modeullakStorageBriefState: modeullakStorageBriefSlice,

        // Modal
        answerModalState: answerModalSlice,
        keywordModalState: keywordModalSlice,

        // Global
        roomFrameState: roomFrameSlice,
        hostState: hostSlice,
        selectedUserState: selectedUserIdSlice,
        selectedLanguageState: selectedLanguageSlice,
        selectedStorageState: selectedStorageIdSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;