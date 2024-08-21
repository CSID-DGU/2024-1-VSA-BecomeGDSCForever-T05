import * as S from "./style";
import {CalendarProps} from "react-calendar";

import Next from "@/assets/icons/NextLabelIcon.svg";
import Prev from "@/assets/icons/PrevLabelIcon.svg";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {updateSelectedDate, updateStartedAtAndEndedAt} from "@/stores/slices/calendar/calendar.slice.ts";
import {useModeullakCalendarTag} from "@/hooks/modeullak/useModeullakCalendarTag.ts";
import {convertDateToString} from "@/utils/dateTimeUtil.ts";
import React from "react";

export default function MyCalendar() {

    const dispatch = useDispatch<AppDispatch>();
    const calendarState = useSelector((state: RootState) => state.calendarState);
    const modeullakCalendarTag = useModeullakCalendarTag(calendarState.startedAt, calendarState.endedAt);

    /* --------------------------------------------------------------------------- */
    /* Calendar State------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const onClickDate = (value: Date): void => {
        dispatch(updateSelectedDate(convertDateToString(value)));
    };

    const onActiveStartDateChange = ({action, activeStartDate, view}: {
        action: string;
        activeStartDate: Date | null;
        view: string
    }) => {
        if (action !== null && view !== null) {
            dispatch(updateStartedAtAndEndedAt({
                startedAt: convertDateToString(new Date(activeStartDate!.getFullYear(), activeStartDate!.getMonth(), 1)),
                endedAt: convertDateToString(new Date(activeStartDate!.getFullYear(), activeStartDate!.getMonth() + 1, 0))
            }))
        }
    };

    const formatDay: CalendarProps["formatShortWeekday"] = (locale, date) => {
        return date.toLocaleDateString(locale, {weekday: "long"});
    };

    const formatMonthYear: CalendarProps["formatMonthYear"] = (_, date) => {
        return date.toLocaleDateString("ko-KR", {year: "numeric", month: "long"});
    };

    const formatYear: CalendarProps["formatYear"] = (_, date) => {
        return date.toLocaleDateString("ko-KR", {year: "numeric"});
    };

    const isSameDay = (date1: Date, date2: Date) => {
        const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        return d1.getTime() === d2.getTime();
    };

    const tileContent = ({date, view}: { date: Date; view: string }) => {
        const contents: React.ReactNode[] = [];

        if (view === "month") {
            modeullakCalendarTag.tags.forEach((tag) => {
                if (isSameDay(date, new Date(tag.date))) {
                    contents.push(
                        <S.TagList>
                            {tag.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </S.TagList>
                    );
                }
            })
        }

        return <>{contents}</>;
    };

    return (
        <S.CalendarBox>
            <S.StyleCalendar
                locale="en"
                calendarType="gregory"
                onClickDay={onClickDate}
                value={calendarState.selectedDate}
                formatShortWeekday={formatDay}
                formatMonthYear={formatMonthYear}
                formatYear={formatYear}
                nextLabel={<S.ExImg src={Next}/>}
                prevLabel={<S.ExImg src={Prev}/>}
                next2Label={null}
                prev2Label={null}
                showNeighboringMonth={false}
                tileContent={tileContent}
                onActiveStartDateChange={onActiveStartDateChange}
                minDate={new Date(2024, 0, 1)}
                maxDate={new Date(2030, 11, 31)}
            />
        </S.CalendarBox>
    );
}
