import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakUserDependentDialogueTemporarySummary} from "@/apis/dialogue";

export const useModeullakUserDependentDialogueTemporarySummary = (modeullakId: number, userId: string) => {
    const dispatch = useDispatch<AppDispatch>();
    const modeullakUserDependentDialogueTemporarySummary = useSelector((state: RootState) => state.modeullakUserDependentDialogueSummaryState);

    useEffect(() => {
        dispatch(fetchModeullakUserDependentDialogueTemporarySummary({modeullakId, userId}));
    }, [modeullakId, userId]);

    return modeullakUserDependentDialogueTemporarySummary;
}