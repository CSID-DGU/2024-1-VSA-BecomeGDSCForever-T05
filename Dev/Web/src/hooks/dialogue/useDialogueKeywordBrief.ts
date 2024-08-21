import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchModeullakKeywordDialogueBrief} from "@/apis/dialogue";
import {AppDispatch, RootState} from "@/stores/store.ts";

export const useDialogueKeywordBrief = (modeullakId: number, keywordId: number) => {
    const dispatch = useDispatch<AppDispatch>();
    const dialogueKeywordBriefState = useSelector((state: RootState) => state.dialogueKeywordBriefState);

    useEffect(() => {
        dispatch(fetchModeullakKeywordDialogueBrief({modeullakId, keywordId}));
    }, [modeullakId, keywordId]);

    return dialogueKeywordBriefState;
}