import authInstance from "@/apis/base/authInstance.ts";
import publicInstance from "@/apis/base/publicInstance.ts";

export const postFormLogin = async (data: { email: string; password: string }) => {
    const formData = new FormData();

    formData.append("serial_id", data.email);
    formData.append("password", data.password);

    const response = await authInstance.post("/auth/login", formData, {
        headers: {
            "Content-type": "multipart/form-data",
        }
    });

    return response.data;
}

export const validateEmail = async (email: string) => {
    const response = await publicInstance.post("/auth/validations/email", {
        email: email,
        is_duplicate_check: true,
    });

    return response.data;
}

export const validateAuthCode = async (email: string, authenticationCode: string) => {
    const response = await publicInstance.post("/auth/validations/authentication-code", {
        email: email,
        authentication_code: authenticationCode
    });

    return response.data;
}

export const postRegister = async (data: { nickname: string, password: string, temporaryToken: string }) => {
    const response = await authInstance.post("/auth/sign-up", {
        nickname: data.nickname,
        password: data.password,
        temporary_token: data.temporaryToken,
    });

    return response.data;
}