import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakDialogueTemporarySummary} from "@/apis/dialogue";

export const useModeullakDialogueTemporarySummary = (modeullakId: number) => {
    const dispatch = useDispatch<AppDispatch>();
    const modeullakDialogueTemporarySummary = useSelector((state: RootState) => state.modeullakDialogueTemporarySummaryState);

    useEffect(() => {
        dispatch(fetchModeullakDialogueTemporarySummary(modeullakId));
    }, [modeullakId]);

    return modeullakDialogueTemporarySummary;
}