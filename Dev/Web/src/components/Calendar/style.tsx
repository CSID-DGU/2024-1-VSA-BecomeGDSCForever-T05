import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
    gap: 0.5em; /* 버튼과 라벨 사이의 간격을 줄임 */
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
    background-color: #e8e8e8;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e8e8e8;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1em; /* 크기를 키움 */
    color: #42850d; /* 텍스트 색상 설정 */
    border-top: 1px solid #42850d; /* 요일 테두리 색상 */
    border-bottom: 1px solid #42850d; /* 요일 테두리 색상 */
  }

  .react-calendar__month-view__days__day--weekend {
    color: #42850d; /* 주말 텍스트 색상 설정 */
  }

  .react-calendar__tile {
    padding: 2em; /* 패딩 조정 */
    font-size: 1.2em; /* 폰트 크기 조정 */
    text-align: center;
    position: relative;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #dcf8a3; /* 타일 호버 시 배경 색상 */
    border-radius: 5px;
  }

  .react-calendar__tile--now {
    background: #ffffff; /* 오늘 날짜 배경 색상 */
    color: transparent; /* 오늘 날짜 숫자 숨김 */
    border-radius: 5px;
    border: 1px solid #42850d; /* 오늘 날짜 테두리 색상 */
    position: relative;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #dcf8a3; /* 오늘 날짜 호버 시 배경 색상 */
  }

  .react-calendar__tile--now .today-label {
    color: #42850d; /* 오늘 텍스트 색상 */
    position: absolute;
    z-index: 10;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 1em;
    width: auto;
    height: auto;
    background: #ffffff; /* 오늘 텍스트 배경 색상 */
  }

  .react-calendar__tile--active {
    color: #ffffff; /* 선택된 날짜 텍스트 색상 */
    border-radius: 5px;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #42850d; /* 선택된 날짜 호버 시 배경 색상 */
  }

  .react-calendar__tile--hasActive {
    background: #42850d; /* 활성화된 날짜 배경 색상 */
    color: #ffffff; /* 활성화된 날짜 텍스트 색상 */
    border-radius: 5px;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #42850d; /* 활성화된 날짜 호버 시 배경 색상 */
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none; /* 밑줄 제거 */
  }
`;
