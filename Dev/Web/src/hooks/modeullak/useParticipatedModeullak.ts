import {AppDispatch, RootState} from "@/stores/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchParticipatedModeullak} from "@/apis/modeullak";

export const useParticipatedModeullak = () => {

    const dispatch = useDispatch<AppDispatch>()
    const participatedModeullakState = useSelector((state: RootState) => state.participatedModeullakState);

    useEffect(() => {
        dispatch(fetchParticipatedModeullak());
    }, [dispatch]);

    return participatedModeullakState
}