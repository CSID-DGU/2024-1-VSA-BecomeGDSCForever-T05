import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakStorageBrief} from "@/apis/storage";

export const useModeullakStorageBrief = (modeullakId: number) => {
    const dispatch = useDispatch<AppDispatch>();
    const modeullakStorageBriefState = useSelector((state: RootState) => state.modeullakStorageBriefState);

    useEffect(() => {
        dispatch(fetchModeullakStorageBrief(modeullakId));
    }, [modeullakId]);

    return modeullakStorageBriefState;
}