import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import theme from "@/shared/theme.ts";

export const CalendarBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1120px;
`;

export const StyleCalendar = styled(Calendar)`
    width: 100%;
    height: 100%;
    border: none;
    margin-bottom: 15px;
    padding: 20px;

    .react-calendar__navigation {
        display: flex;
        justify-content: center; /* 가운데 정렬 */
        align-items: center; /* 수직 정렬 */
        height: 34px; /* 높이를 늘려서 가운데 정렬이 더 명확하게 보이도록 함 */
        margin-bottom: 1em;
        // gap: 0.5em; /* 버튼과 라벨 사이의 간격을 줄임 */
        gap: 34px;
    }

    .react-calendar__navigation__label {
        flex-grow: 0 !important;

        gap: 0.5em; /* 월/연도와 버튼 사이의 간격을 줄임 */
        font-size: 1.5em; /* 크기를 키움 */
        color: #42850d; /* 텍스트 색상 설정 */
        padding: 0; /* 불필요한 패딩 제거 */
    }

    .react-calendar__navigation__label > span {
        margin: 0;
        padding: 0;
    }

    .react-calendar__navigation button {
        min-width: 24px;
        background: none;
        border: none; /* 버튼 테두리 제거 */
        padding: 0; /* 불필요한 패딩 제거 */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-calendar__navigation button:disabled {
        background: none;
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
        background-color: transparent;
    }

    .react-calendar__month-view__weekdays {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1em; /* 크기를 키움 */
        color: #42850d; /* 텍스트 색상 설정 */
        border-top: 1px solid #42850d; /* 요일 테두리 색상 */
        border-bottom: 1px solid #42850d; /* 요일 테두리 색상 */
        padding-top: 12px;
        padding-bottom: 12px;
    }

    // 각 날짜 타일 스타일
    // .react-calendar__month-view__days__day > button {
    //   width: 26px;
    //   height: 26px;
    //   border-radius: 50%;
    // }

    .react-calendar__month-view__days__day--weekend {
        color: black; /* 주말 텍스트 색상 설정 */
    }

    .react-calendar__tile {
        padding: 12px; /* 패딩 조정 */
        min-hight: 350px;

        font-size: 1.2em;
        text-align: left; /* 텍스트를 왼쪽 정렬 */
        vertical-align: top; /* 텍스트를 상단 정렬 */

        position: relative;
        display: flex;
        flex-direction: column;
    }

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background-color: transparent; /* 타일 호버 시 배경 색상 */
        border-radius: 5px;
    }

    .react-calendar__tile span.date {
        position: absolute;
        top: 0.5em;
        left: 0.5em;
    }

    .react-calendar__tile--range {
        background: transparent;
    }

    .react-calendar__tile--range:enabled:hover,
    .react-calendar__tile--range:enabled:focus {
        background: transparent;
    }

    .react-calendar-_tile--rangeStart {
        background: transparent;
    }

    .react-calendar-_tile--rangeStart:enabled:hover,
    .react-calendar-_tile--rangeStart:enabled:focus {
        background: transparent;
    }

    .react-calendar-_tile--rangeEnd {
        background: transparent;
    }

    .react-calendar-_tile--rangeEnd:enabled:hover,
    .react-calendar-_tile--rangeEnd:enabled:focus {
        background: transparent;
    }

    .react-calendar__tile--now {
        background: ${theme.colorSystem.secondary["100"]}; /* 오늘 날짜 배경 색상 */
        border-radius: 5px;
        //border: 1px solid #42850d; /* 오늘 날짜 테두리 색상 */
        position: relative;
    }

    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        background: transparent; /* 오늘 날짜 호버 시 배경 색상 */
    }

    .react-calendar__tile--active {
        color: black; /* 선택된 날짜 텍스트 색상 */
        background-color: transparent;
        border-radius: 5px;
    }

    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        background: transparent; /* "오늘"날짜에 대한 호버, 클릭 시 배경 색상 */
    }

    .react-calendar__tile--hasActive {
        background: transparent; /* 활성화된 날짜 배경 색상 */
        color: #ffffff; /* 활성화된 날짜 텍스트 색상 */
        border-radius: 5px;
    }

    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
        background: transparent; /* 활성화된 날짜 호버 시 배경 색상 */
    }

    .react-calendar__month-view__weekdays__weekday abbr {
        text-decoration: none; /* 밑줄 제거 */
    }

    .react-calendar__month-view__days {
        display: flex;
        flex-wrap: wrap;
    }

    .react-calendar__month-view__days__day {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1em;
        font-size: 1.2em;
        text-align: left;
        vertical-align: top;
        min-height: 150px; /* 각 타일의 최소 높이 */
        box-sizing: border-box;
    }

    .react-calendar__tile {
        flex: 1 1 calc(100% / 7); /* 타일의 너비를 1/7로 설정 */
    }

    .react-calendar__tile span.date {
        position: absolute;
        top: 0.5em;
        left: 0.5em;
    }
`;

export const ExButton = styled.button`
    background: url("assets/icons/NextlabelIcon.svg") no-repeat;
    background-size: cover;
    width: 24px;
    height: 24px;
    border: 1px solid #42850d;
    cursor: pointer;
`;

export const ExImg = styled.img`
    display: flex;
    width: 40px;
    height: 40px;
    padding: 6px;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    border: 2px solid var(--Grey-Blue-97, #f5f6f7);
    background: var(--White, #fff);

    /* Shadows/Gray Blue/3%/5b */
    box-shadow: 0px 2px 5px 0px rgba(38, 51, 77, 0.03);
`;

export const TagList = styled.div`
    margin-top: 0.5em;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 8px 12px;
    flex-wrap: wrap;

    .tag {
        background: #dcf8a3;
        border-radius: 8px;
        padding: 0.2em 0.5em;
        font-size: 0.8em;
    }
`;

export const TodayContainer = styled.div`
    color: #42850d;
    font-weight: bold;
    font-size: 1em;
    margin-bottom: 4px;
`;
