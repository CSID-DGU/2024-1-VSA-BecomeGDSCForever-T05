import {ResponseWrapper} from "@/interfaces/wrappers/ResponseWrapper.ts";

export interface StateWrapper<T> {
    success: boolean;
    message?: string;
    data?: T;
}

export function copyWith<T>(
    state: StateWrapper<T>,
    overrides: Partial<StateWrapper<T>>
): StateWrapper<T> {
    return {
        success: overrides.success ?? state.success,
        message: overrides.message ?? state.message,
        data: overrides.data ?? state.data,
    }
}

export function fromResponse<T>(response: ResponseWrapper<T>) {
    return {
        success: response.success,
        message: response.message,
        data: null,
    }
}

export function fromResponseAndState<T>(response: ResponseWrapper<T>, data: T) {
    return {
        success: response.success,
        message: response.message,
        data: data,
    }
}