import authInstance from "@/apis/base/authInstance.ts";

// 저장소 생성하기
export const createStorage = async (data: {
    parent_storage_id?: string,
    type: string,
    name: string,
}) => {
    const response = await authInstance.post(`/api/v1/storages`, {
        parentStorageId: data.parent_storage_id,
        type: data.type,
        name: data.name,
    });
    console.log("resData", response.data);
    return response.data;
}
