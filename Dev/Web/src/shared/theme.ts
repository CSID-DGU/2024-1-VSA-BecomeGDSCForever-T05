import {css} from "styled-components";

const colorSystem = {

    /**
     * Primary Color
     */
    primary: {
        100: "#C9FCD4",
        200: "#95F9B5",
        300: "#5FED9A",
        400: "#37DC8C",
        500: "#00C579",
        600: "#00A978",
        700: "#008D73",
        800: "#007268",
        900: "#005D5E",
    },

    /**
     * Secondary Color
     */
    secondary: {
        100: "#EFFBD0",
        200: "#DCF8A3",
        300: "#BDEA72",
        400: "#9CD54C",
        500: "#70BA1B",
        600: "#589F13",
        700: "#42850D",
        800: "#2F6B08",
        900: "#225905",
    },

    /**
     * Neutral Color
     */
    neutral: {
        100: "#F4F4FA",
        200: "#EAEAF6",
        300: "#D4D4E3",
        400: "#B7B7C9",
        500: "#9292A5",
        600: "#6A6A8D",
        700: "#494976",
        800: "#2E2E5F",
        900: "#1C1C4F",
    },

    /**
     * Red Color
     */
    red: {
        100: "#FFE3D4",
        200: "#FFC1AA",
        300: "#FF977F",
        400: "#FF6F60",
        500: "#FF2E2B",
        600: "#DB1F2C",
        700: "#B7152F",
        800: "#930D2E",
        900: "#7A082D",
    },

    /**
     * Yellow Color
     */
    yellow: {
        100: "#FEF5CC",
        200: "#FEE999",
        300: "#FCD866",
        400: "#FAC740",
        500: "#F7AD02",
        600: "#D48E01",
        700: "#B17101",
        800: "#8F5600",
        900: "#764400",
    },

    /**
     * Blue Color
     */
    blue: {
        100: "#DEEFFE",
        200: "#BDDDFD",
        300: "#9BC7F9",
        400: "#80B1F3",
        500: "#5891EB",
        600: "#4070CA",
        700: "#2C52A9",
        800: "#1C3988",
        900: "#102670",
    },

    /**
     * White Color
     */
    white: "#FFFFFF",

    /**
     * Black Color
     */
    black: "#000000",
}

const fontSystem = {
    h0: {
        fontSize: "3rem",
        lineHeight: "3.75rem",
        fontWeight: "700",
        fontFamily: "SUIT"
    },
    h1: {
        fontSize: "1.5rem",
        lineHeight: "1.875rem",
        fontWeight: "700",
        fontFamily: "SUIT"
    },
    h2: {
        fontSize: "1.375rem",
        lineHeight: "1.719rem",
        fontWeight: "700",
        fontFamily: "SUIT"
    },
    h3: {
        fontSize: "1.25rem",
        lineHeight: "1.563rem",
        fontWeight: "700",
        fontFamily: "SUIT"
    },
    h4: {
        fontSize: "1.125rem",
        lineHeight: "1.406rem",
        fontWeight: "700",
        fontFamily: "SUIT"
    },
    h5: {
        fontSize: "1rem",
        lineHeight: "1.25rem",
        fontWeight: "700",
        fontFamily: "SUIT"
    },
    h6: {
        fontSize: "1rem",
        lineHeight: "1.25rem",
        fontWeight: "500",
        fontFamily: "SUIT"
    },
    sub1: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "700",
        fontFamily: "SUIT"
    },
    sub2: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "500",
        fontFamily: "SUIT"
    },
    sub3: {
        fontSize: "0.75rem",
        lineHeight: "1.25rem",
        fontWeight: "500",
        fontFamily: "SUIT"
    },
}

/** 검정 배경 */
export const darkTheme = {
    color: "#000000",
    bgColor: "#FFFFFF",
    gray: "#343434",
};
/** 흰색 배경 */
export const lightTheme = {
    color: "#FFFFFF",
    bgColor: "#000000",
    gray: "#D9D9D9",
};

/** 반응형 사이즈 */
const mediaSize = {
    xs: "screen and (max-width: '400px')",
    sm: "screen and (max-width: '640px')",
    md: "screen and (max-width: '768px')",
    lg: "screen and (max-width: '1024px')",
    xl: "screen and (max-width: '1280px')",
    "2xl": "screen and (max-width: '1536px')",
};

/** 그 외의 크기 */
const size = {
    xs: "0.2em",
    sm: "0.4em",
    md: "0.6em",
    lg: "1em",
    xl: "1.4em",
    "2xl": "1.6em",
};

/** 유틸리티 */
const util = {
    truncate: () => css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `,

    scroll: () => css`
        &::-webkit-scrollbar {
            /** 스크롤바의 너비 */
            width: 4px;
        }

        &::-webkit-scrollbar-thumb {
            /** 스크롤바 길이 */
            height: 25%;
            /** 스크롤바의 색상 */
            background: ${({theme}) => theme.colors.indigo600};
            border-radius: 10px;
        }

        &::-webkit-scrollbar-track {
            /** 스크롤바 뒷 배경 색상 */
            background: ${({theme}) => theme.colors.indigo300};
        }
    `,
};

const theme = {
    colorSystem,
    fontSystem,
    mediaSize,
    size,
    util,
};

export default theme;

/** 타입 재정의를 위함 ( "styled-components" 변수 타입 추론을 위함( 자동완성 ) ) */
export type Theme = typeof theme;
