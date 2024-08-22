import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 80px;
    min-height: 1080px;

    height: 100vh;

    margin: 0 0 auto 0;

    flex-direction: column;
    align-items: center;
    gap: 12px;
    background: ${({theme}) => theme.colorSystem.primary["900"]};
`;

export const MyProfile = styled.div`
    height: 56px;
    flex-shrink: 0;
    align-self: stretch;
    position: relative;
    padding-left: 10px; /* 컨텐츠와 border 사이의 간격 조정 */

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
        border-radius: 0px 2px 2px 0px;
        background: ${({theme}) => theme.colorSystem.primary["500"]};
    }
`;

export const Hr = styled.hr`
    width: 48px;
    height: 2px;
    flex-shrink: 0;
    background: ${({theme}) => theme.colorSystem.primary["500"]};
    border: none;
    border-radius: 1px;
`

export const UserProfileList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    overflow-y: scroll;

    // 스크롤 바 숨기기
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`;

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
