import {createAsyncThunk} from "@reduxjs/toolkit";
import authInstance from "@/apis/base/authInstance.ts";

export const fetchParticipatedModeullak = createAsyncThunk(
    "fetchParticipatedModeullak",
    async () => {
        const response = await authInstance.get("/api/v1/users/modeullaks/participation-statuses");

        return response.data;
    }
)

export const fetchModeullakSummaries = createAsyncThunk(
    "fetchModeullakSummaries",
    async (modeullakId: number) => {
        const response = await authInstance.get(`/api/v1/modeullaks/${modeullakId}/summaries`);

        return response.data;
    }
)

export const fetchModeullakDetail = createAsyncThunk(
    "fetchModeullakDetail",
    async (modeullakId: number) => {
        const response = await authInstance.get(`/api/v1/modeullaks/${modeullakId}`);

        return response.data;
    }
)

export const fetchModeullakBrief = createAsyncThunk(
    "fetchModeullakBrief",
    async (authCode: string) => {
        const response = await authInstance.get(`/api/v1/modeullaks/briefs?code=${authCode}`);

        return response.data;
    }
)

export const fetchModeullakCalendarTags = createAsyncThunk(
    "fetchModeullakCalendarTags",
    async ({startedAt, endedAt}: { startedAt: string, endedAt: string }) => {
        const response = await authInstance.get(`/api/v1/users/modeullaks/tags?startedAt=${startedAt}&endedAt=${endedAt}`);

        return response.data;
    }
)

export const fetchModeullakOverview = createAsyncThunk(
    "fetchModeullakOverview",
    async (whichAt: string) => {
        const response = await authInstance.get(`/api/v1/users/modeullaks/overviews?whichAt=${whichAt}`);

        return response.data;
    }
)

export const checkModeullakCode = async (code: string) => {
    const response = await authInstance.get(`/api/v1/modeullaks/briefs?code=${code}`);

    return response.data;
}

export const fetchModeullakKeywords = createAsyncThunk(
    "fetchModeullakKeywords",
    async (modeullakId: number) => {
        const response = await authInstance.get(`/api/v1/modeullaks/${modeullakId}/keywords?page=1&size=1000`);

        return response.data;
    }
)