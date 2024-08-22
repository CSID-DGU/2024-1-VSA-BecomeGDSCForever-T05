import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    //max-height: 1080px;
    //overflow: hidden;
    //max-width: 1920px;

    ::-webkit-scrollbar {
        display: none; /* 크롬, 사파리, 엣지에서 스크롤바 숨기기 */
    }

    -ms-overflow-style: none; /* IE에서 스크롤바 숨기기 */
    scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */

    flex-direction: column;
    margin: 0 auto;
`;
