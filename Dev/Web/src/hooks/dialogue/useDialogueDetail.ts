import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {fetchDialogueDetail} from "@/apis/dialogue";

export const useDialogueDetail = (dialogueId: number) => {

    const dispatch = useDispatch<AppDispatch>();
    const dialogueDetailState = useSelector((state: RootState) => state.dialogueDetailState);

    useEffect(() => {
        dispatch(fetchDialogueDetail(dialogueId));
    }, [dialogueId]);

    return dialogueDetailState;
}