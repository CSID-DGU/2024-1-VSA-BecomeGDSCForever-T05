import {instance} from "@/apis/base/axios.ts";
import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

export const postFormLogin = async (data: { email: string; password: string }) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    const response = await instance.post("/auth/login", formData);

    return response.data;
}

export const validateEmail = async (email: string) => {
    const response: ResponseWrapper<{ tryCnt: number }> = await instance.post("/auth/validations/email", {
        email: email
    });

    return response.data;
}

export const validateAuthCode = async (email: string, authenticationCode: string) => {
    const response = await instance.post("/auth/validations/authentication-code", {
        email: email,
        authentication_code: authenticationCode
    });
    
    return response.data;
}