import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {UserQuestionChunkState} from "@/interfaces/states/UserQuestionChunkState.ts";
import {updateUserQuestionChunkState} from "@/stores/slices/userQuestionChunk.slice.ts";
import {useEffect} from "react";

export const useUserQuestionChunk = () => {
    const dispatch = useDispatch<AppDispatch>();
    const userQuestionChunkState = useSelector((state: RootState) => state.userQuestionChunkState);


    useEffect(() => {

        const fetchData: UserQuestionChunkState[] = [
            {
                id: 1,
                keyword: "자료구조",
                question: "포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~",
                answerBy: "AI 답변"
            },
            {
                id: 2,
                keyword: "자료구조",
                question: "포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~",
                answerBy: "조교 답변"
            },
            {
                id: 3,
                keyword: "자료구조",
                question: "포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~",
                answerBy: "조교 답변"
            },
            {
                id: 4,
                keyword: "자료구조",
                question: "포인터는 강력한 도구이지만, 잘못 사용하면 메모리 누수, 버퍼 오버플로우 등 다양한 문제를 일으킬 수 있으므로 주의가 필요합니다. 따라서 포인터를 사용할 때는 메모리 관리를 철저히 하고, 항상 할당된 메모리를 해제하는 습관을 기르는 것이 중요합니다. 주저리 주저리 주저리 ~~",
                answerBy: "AI 답변"
            }
        ]

        dispatch(updateUserQuestionChunkState(fetchData));
    }, [dispatch]);

    return userQuestionChunkState;
}