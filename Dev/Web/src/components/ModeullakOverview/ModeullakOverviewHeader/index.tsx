import H1 from "@/components/Common/Font/Heading/H1";
import theme from "@/shared/theme.ts";
import {RootState} from "@/stores/store.ts";
import {useSelector} from "react-redux";
import {convertDateToKoreanString, convertStringToDate} from "@/utils/dateTimeUtil.ts";

export default function ModeullakOverviewHeader() {

    const date = useSelector((state: RootState) => state.calendarState.selectedDate);

    return (
        <H1 color={theme.colorSystem.primary["800"]}
            text={`${convertDateToKoreanString(convertStringToDate(date))}의 질문 요약본`}
            textAlign={"left"}/>
    );
}