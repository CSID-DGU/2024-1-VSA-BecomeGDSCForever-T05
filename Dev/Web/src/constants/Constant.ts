export const CONSTANT = {
    ROUTER: {
        ENTRY: "/",
        HOME: "/home",
        CODE: "/code",
    },
    REGEX: {
        EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        PASSWORD: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
        NICKNAME: /^[a-zA-Z0-9가-힣]*$/,
        AUTH_CODE: /^[0-9]{6}$/,
    }
}