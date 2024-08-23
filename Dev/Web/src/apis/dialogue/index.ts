import {createAsyncThunk} from "@reduxjs/toolkit";
import authInstance from "@/apis/base/authInstance.ts";

export const fetchModeullakUserDialogueSummary = createAsyncThunk(
    "fetchModeullakUserDialogueSummary",
    async (modeullakId: number) => {
        const response = await authInstance.get(`/api/v1/modeullaks/${modeullakId}/users/dialogues/summaries`);

        return response.data;
    }
)

export const fetchDialogueDetail = createAsyncThunk(
    "fetchDialogueDetail",
    async (dialogueId: number) => {
        const response = await authInstance.get(`/api/v1/dialogues/${dialogueId}`);

        return response.data;
    }
)

export const fetchModeullakKeywordDialogueBrief = createAsyncThunk(
    "fetchModeullakKeywordDialogueBrief",
    async ({modeullakId, keywordId}: { modeullakId: number, keywordId: number }) => {
        const response = await authInstance.get(`/api/v1/modeullaks/${modeullakId}/keywords/${keywordId}/dialogues/briefs`);

        return response.data;
    }
)

export const fetchModeullakDialogueTemporarySummary = createAsyncThunk(
    "fetchModeullakDialogueTemporarySummary",
    async (modeullakId: number) => {
        const response = await authInstance.get(`/api/v1/modeullaks/${modeullakId}/dialogues/temporary-summaries`);

        return response.data;
    }
)

export const fetchModeullakUserDialogueTemporarySummary = createAsyncThunk(
    "fetchModeullakUserDialogueTemporarySummary",
    async (modeullakId: number) => {
        const response = await authInstance.get(`/api/v1/modeullaks/${modeullakId}/users/dialogues/temporary-summaries`);

        return response.data;
    }
)

export const fetchModeullakUserDependentDialogueTemporarySummary = createAsyncThunk(
    "fetchModeullakUserDependentDialogueTemporarySummary",
    async (data: {
        modeullakId: number,
        userId: string
    }) => {
        const response = await authInstance.get(`/api/v1/modeullaks/${data.modeullakId}/users/${data.userId}/dialogues/temporary-summaries`);

        return response.data;
    }
)

export const createDialogue = async (
    modeullakId: number,
    storageId: string,
    shortCode: string,
    content: string
) => {
    const response = await authInstance.post(`/api/v1/dialogues`, {
        modeullak_id: modeullakId,
        storage_id: storageId,
        short_code: shortCode,
        content: content
    })

    return response.data;
}

export const createDialogueAnswer = async (
    dialogueId: number,
    content: string
) => {
    const response = await authInstance.put(`/api/v1/dialogues/${dialogueId}/answers`, {
        content: content
    });

    return response.data;
}