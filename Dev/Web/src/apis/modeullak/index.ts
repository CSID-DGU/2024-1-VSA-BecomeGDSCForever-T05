import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "@/apis/base/axios.ts";

export const fetchParticipatedModeullak = createAsyncThunk(
    "fetchParticipatedModeullak",
    async () => {
        const response = await instance.get("/api/v1/users/modeullaks/participation-statuses");

        return response.data;
    }
)

export const fetchModeullakSummaries = createAsyncThunk(
    "fetchModeullakSummaries",
    async (modeullakId: number) => {
        const response = await instance.get(`/api/v1/modeullaks/${modeullakId}/summaries`);

        return response.data;
    }
)

export const fetchModeullakDetail = createAsyncThunk(
    "fetchModeullakDetail",
    async (modeullakId: number) => {
        const response = await instance.get(`/api/v1/modeullaks/${modeullakId}`);

        return response.data;
    }
)