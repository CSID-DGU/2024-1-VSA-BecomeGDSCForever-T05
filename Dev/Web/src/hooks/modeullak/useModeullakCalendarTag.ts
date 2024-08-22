import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakCalendarTags} from "@/apis/modeullak";

export const useModeullakCalendarTag = (startedAt: string, endedAt: string) => {

    const dispatch = useDispatch<AppDispatch>();
    const modeullakCalendarTag = useSelector((state: RootState) => state.modeullakCalendarTagState);

    useEffect(() => {
        dispatch(fetchModeullakCalendarTags({startedAt, endedAt}));
    }, [startedAt, endedAt]);

    return modeullakCalendarTag;
}