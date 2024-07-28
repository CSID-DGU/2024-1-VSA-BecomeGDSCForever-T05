import { useState } from "react";
import * as S from "./style";
import { CalendarProps } from "react-calendar";
// import moment from "moment";

const MyCalendar = () => {
  // useState 훅의 초기값으로 현재 날짜를 넣어줌
  const [today, setToday] = useState<Date>(new Date());

  // onChange 이벤트에 넣어줘서 날짜가 지날 때마다 today값이 업데이트 되도록 구현
  const onChangeToday = (): void => {
    setToday(today);
  };

  // 요일 이름 길게 만들기(ex. mon, tue, ... -> Monday, Tuesday, ...)
  const formatDay: CalendarProps["formatShortWeekday"] = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  // 태그 삽입 날짜 리스트
  const dayList = [
    "2024-07-02",
    "2024-07-05",
    "2024-07-08",
    "2024-07-11",
    "2024-07-14",
    "2024-07-17",
    "2024-07-20",
  ];

  // 날짜를 비교하는 함수
  const isSameDay = (date1: Date, date2: Date) => {
    // console.log("nonSplit:", date1.toISOString()); -> 2024-07-30T15:00:00.000Z
    // console.log("split:", date1.toISOString().split("T")[0]); -> 2024-07-30
    return (
      date1.toISOString().split("T")[0] === date2.toISOString().split("T")[0]
    );
  };

  // 요일 이름 길게 만들기 및 태그 추가 기능 결합
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    const contents: any[] = [];

    if (view === "month") {
      if (date.toDateString() === new Date().toDateString()) {
        contents.push(<span className="today-label">오늘</span>);
      }

      // if (dayList.find((day) => day === moment(date).format("YYYY-MM-DD"))) {
      if (dayList.find((day) => isSameDay(date, new Date(day)))) {
        contents.push(<span className="tag">태그</span>);
      }
    }

    return <div>{contents}</div>;
  };

  return (
    <S.CalendarBox>
      <S.StyleCalendar
        locale="en"
        calendarType="gregory"
        onChange={onChangeToday}
        value={today}
        formatShortWeekday={formatDay}
        // Icon을 next(prev)Label= 에 컴포넌트 형식으로 할당해주면 됨.
        nextLabel=">"
        prevLabel="<"
        // 이전 달, 다음 달 날짜 숨기기
        showNeighboringMonth={false}
        // 오늘 날짜를 "오눌"로 표시
        tileContent={tileContent}
      />
    </S.CalendarBox>
  );
};

export default MyCalendar;
