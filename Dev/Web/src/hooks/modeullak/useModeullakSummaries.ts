import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakSummaries} from "@/apis/modeullak";

export const useModeullakSummaries = (modeullakId: number) => {

    const dispatch = useDispatch<AppDispatch>();
    const modeullakSummariesState = useSelector((state: RootState) => state.modeullakSummariesState);

    useEffect(() => {
        dispatch(fetchModeullakSummaries(modeullakId));
    }, [dispatch]);

    return modeullakSummariesState;
}