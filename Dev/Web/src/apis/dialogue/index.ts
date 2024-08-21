import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "@/apis/base/axios.ts";

export const fetchModeullakUserDialogueSummary = createAsyncThunk(
    "fetchModeullakUserDialogueSummary",
    async (modeullakId: number) => {
        const response = await instance.get(`/api/v1/modeullaks/${modeullakId}/users/dialogues/summaries`);

        return response.data;
    }
)

export const fetchDialogueDetail = createAsyncThunk(
    "fetchDialogueDetail",
    async (dialogueId: number) => {
        const response = await instance.get(`/api/v1/dialogues/${dialogueId}`);

        return response.data;
    }
)

export const fetchModeullakKeywordDialogueBrief = createAsyncThunk(
    "fetchModeullakKeywordDialogueBrief",
    async ({modeullakId, keywordId}: { modeullakId: number, keywordId: number }) => {
        const response = await instance.get(`/api/v1/modeullaks/${modeullakId}/keywords/${keywordId}/dialogues/briefs`);

        return response.data;
    }
)