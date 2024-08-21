import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakDetail} from "@/apis/modeullak";

export const useModeullakDetail = (modeullakId: number) => {
    const dispatch = useDispatch<AppDispatch>();
    const modeullakDetailState = useSelector((state: RootState) => state.modeullakDetailState);

    useEffect(() => {
        dispatch(fetchModeullakDetail(modeullakId));
    }, [modeullakId]);

    return modeullakDetailState;
}