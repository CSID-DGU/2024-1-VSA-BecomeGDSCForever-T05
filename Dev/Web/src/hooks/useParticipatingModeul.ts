import {AppDispatch, RootState} from "@/stores/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {updateParticipatingModeulState} from "@/stores/slices/participatingModeul.slice.ts";

export const useParticipatingModeul = () => {

    const dispatch = useDispatch<AppDispatch>()
    const participatingModeulState = useSelector((state: RootState) => state.participatingModeulState);

    // Todo: 서버에서 받아온 정보로 업데이트

    dispatch(updateParticipatingModeulState(
        {
            id: 1,
            isParticipating: true,
            name: "자료구조 12강 실습",
        }
    ))

    return participatingModeulState
}