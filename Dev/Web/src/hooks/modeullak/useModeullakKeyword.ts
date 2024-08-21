import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchModeullakKeywords} from "@/apis/modeullak";

export const useModeullakKeyword = (modeullakId: number) => {

    const dispatch = useDispatch<AppDispatch>();
    const modeullakKeywordState = useSelector((state: RootState) => state.modeullakKeywordState);

    useEffect(() => {
        dispatch(fetchModeullakKeywords(modeullakId));
    }, [modeullakId]);

    return modeullakKeywordState;
}