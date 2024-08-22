export interface ResponseWrapper<T> {
    success: boolean;
    message?: string;
    data?: T;
}

export function copyWith<T>(
    response: ResponseWrapper<T>,
    overrides: Partial<ResponseWrapper<T>>
): ResponseWrapper<T> {
    return {
        success: overrides.success ?? response.success,
        message: overrides.message ?? response.message,
        data: overrides.data ?? response.data,
    }
}

export function fromJson<T>(json: Record<string, unknown>): ResponseWrapper<T> {
    return {
        success: json.success as boolean,
        message: json.message as string,
        data: json.data as T,
    }
}

export function noContent<T>(): ResponseWrapper<T> {
    return {
        success: true,
    }
}