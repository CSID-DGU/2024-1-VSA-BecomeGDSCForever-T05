import authInstance from "@/apis/base/authInstance.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const createModeullakStorage = async (data: {
    modeullakId: number;
    parentStorageId: string | null;
    type: "FILE" | "DIRECTORY";
    name: string;
}) => {

    let requestData: object;

    if (data.parentStorageId === null) {
        requestData = {
            modeullak_id: data.modeullakId,
            type: data.type,
            name: data.name
        }
    } else {
        requestData = {
            modeullak_id: data.modeullakId,
            parent_storage_id: data.parentStorageId,
            type: data.type,
            name: data.name
        }
    }

    const response = await authInstance.post(`/api/v1/storages`, requestData);

    return response.data;
}

export const fetchModeullakStorageBrief = createAsyncThunk(
    "fetchModeullakStorageBrief",
    async (modeullakId: number) => {
        const response = await authInstance.get(`/api/v1/modeullaks/${modeullakId}/users/storages`);

        return response.data;
    }
)

export const fetchModeullakUserStorageBrief = async (modeullakId: number, userId: string) => {
    const response = await authInstance.get(`/api/v1/modeullaks/${modeullakId}/users/${userId}/storages`);

    return response.data;
}

export const updateModeullakStorageContent = async (storageId: string, content: string) => {
    const response = await authInstance.put(`/api/v1/storages/${storageId}/content`, {
        content: content
    })

    return response.data;
}

export const fetchModeullakStorageContent = async (modeullakId: number, storageId: string) => {
    const response = await authInstance.get(`/api/v1/modeullaks/${modeullakId}/storages/${storageId}`);

    return response.data;
}