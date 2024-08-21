import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakUserDialogueSummary} from "@/apis/dialogue";

export const useModeullakUserDialogueSummary = (modeullakId: number) => {
    const dispatch = useDispatch<AppDispatch>();
    const modeullakUserDialogueSummaryState = useSelector((state: RootState) => state.modeullakUserDialogueSummaryState);

    useEffect(() => {
        dispatch(fetchModeullakUserDialogueSummary(modeullakId));
    }, [modeullakId]);

    return modeullakUserDialogueSummaryState;
}