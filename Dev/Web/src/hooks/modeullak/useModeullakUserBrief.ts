import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakUserBrief} from "@/apis/modeullak";

export const useModeullakUserBrief = (modeullakId: number) => {

    const dispatch = useDispatch<AppDispatch>();
    const modeullakUserBrief = useSelector((state: RootState) => state.modeullakUserBriefState);

    useEffect(() => {
        dispatch(fetchModeullakUserBrief(modeullakId));
    }, [modeullakId]);

    return modeullakUserBrief;
}