import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakOverview} from "@/apis/modeullak";

export const useModeullakOverviews = (whichAt: string) => {

    const dispatch = useDispatch<AppDispatch>();
    const modeullakOverviewsState = useSelector((state: RootState) => state.modeullakOverviewsState);

    useEffect(() => {
        dispatch(fetchModeullakOverview(whichAt));
    }, [whichAt]);

    return modeullakOverviewsState;
}