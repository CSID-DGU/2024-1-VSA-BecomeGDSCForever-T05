import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    /* 전역 스타일 작성 */
    @font-face {
        font-family: 'SUIT';
        src: url('../assets/fonts/SUIT-Regular.otf') format('oft');
        font-weight: 500;
        font-style: normal;
    }

    body {
        font-family: 'SUIT', sans-serif;

        ::-webkit-scrollbar {
            display: none; /* 크롬, 사파리, 엣지에서 스크롤바 숨기기 */
        }

        -ms-overflow-style: none; /* IE에서 스크롤바 숨기기 */
        scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
    }
`;
