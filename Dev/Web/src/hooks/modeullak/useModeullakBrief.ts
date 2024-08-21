import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakBrief} from "@/apis/modeullak";

export const useModeullakBrief = (authCode: string) => {

    const dispatch = useDispatch<AppDispatch>();
    const modeullakBriefState = useSelector((state: RootState) => state.modeullakBriefState);

    useEffect(() => {
        dispatch(fetchModeullakBrief(authCode));
    }, [dispatch]);

    return modeullakBriefState;
}