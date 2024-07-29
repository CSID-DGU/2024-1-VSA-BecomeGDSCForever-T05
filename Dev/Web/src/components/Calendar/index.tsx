import { useState } from "react";
import * as S from "./style";
import { CalendarProps } from "react-calendar";

import Next from "@/assets/icons/NextLabelIcon.svg";
import Prev from "@/assets/icons/PrevLabelIcon.svg";

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

  const formatMonthYear: CalendarProps["formatMonthYear"] = (locale, date) => {
    return date.toLocaleDateString("ko-KR", { year: "numeric", month: "long" });
  };

  const formatYear: CalendarProps["formatYear"] = (locale, date) => {
    return date.toLocaleDateString("ko-KR", { year: "numeric" });
  };

  const dayList = [
    "2024-07-02",
    "2024-07-05",
    "2024-07-08",
    "2024-07-10",
    "2024-07-14",
    "2024-07-17",
    "2024-07-20",
    "2024-07-28",
  ];

  // 날짜를 비교하는 함수
  const isSameDay = (date1: Date, date2: Date) => {
    // console.log("nonSplit:", date1.toISOString()); -> 2024-07-30T15:00:00.000Z
    // console.log("split:", date1.toISOString().split("T")[0]); -> 2024-07-30
    return (
      date1.toISOString().split("T")[0] === date2.toISOString().split("T")[0]
    );
  };

  // 태그 처리 로직
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    const contents: any[] = [];
    const tags = ["C#", "java", "C", "OS", "machineLearning"]; // 태그 더미 데이터

    if (view === "month") {
      if (date.toDateString() === new Date().toDateString()) {
        contents.push(<span className="today-label">오늘</span>);
      }

      if (dayList.find((day) => isSameDay(date, new Date(day)))) {
        const visibleTags = tags.slice(0, 3);
        const moreTags =
          tags.length > 4 ? <span className="more">...</span> : null;

        contents.push(
          <S.TagList>
            {visibleTags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
            {moreTags}
          </S.TagList>
        );
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
        formatMonthYear={formatMonthYear}
        formatYear={formatYear}
        nextLabel={<S.ExImg src={Next} />}
        prevLabel={<S.ExImg src={Prev} />}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        tileContent={tileContent}
      />
    </S.CalendarBox>
  );
};

export default MyCalendar;
