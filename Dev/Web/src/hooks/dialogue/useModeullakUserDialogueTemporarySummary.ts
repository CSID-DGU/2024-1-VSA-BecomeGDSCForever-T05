import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakUserDialogueTemporarySummary} from "@/apis/dialogue";

export const useModeullakUserDialogueTemporarySummary = (modeullakId: number) => {
    const dispatch = useDispatch<AppDispatch>();
    const modeullakUserDialogueTemporarySummary = useSelector((state: RootState) => state.modeullakUserDialogueTemporarySummaryState);

    useEffect(() => {
        dispatch(fetchModeullakUserDialogueTemporarySummary(modeullakId));
    }, [modeullakId]);

    return modeullakUserDialogueTemporarySummary;
}