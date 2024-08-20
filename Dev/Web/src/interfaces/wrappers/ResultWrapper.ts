import {StateWrapper} from "@/interfaces/wrappers/StateWrapper.ts";

export interface ResultWrapper {
    success: boolean;
    message?: string;
}

export function copyWith(
    result: ResultWrapper,
    overrides: Partial<ResultWrapper>
): ResultWrapper {
    return {
        success: overrides.success ?? result.success,
        message: overrides.message ?? result.message,
    }
}

export function fromState<T>(state: StateWrapper<T>) {
    return {
        success: state.success,
        message: state.message,
    }
}