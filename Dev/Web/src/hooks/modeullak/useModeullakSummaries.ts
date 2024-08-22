import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakSummaries} from "@/apis/modeullak";
import {updateHostState} from "@/stores/slices/global/host.slice.ts";

export const useModeullakSummaries = (modeullakId: number) => {

    const dispatch = useDispatch<AppDispatch>();
    const modeullakSummariesState = useSelector((state: RootState) => state.modeullakSummariesState);

    useEffect(() => {
        dispatch(fetchModeullakSummaries(modeullakId));
        dispatch(updateHostState(modeullakSummariesState.isHost));
    }, [dispatch]);

    return modeullakSummariesState;
}