import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {useEffect} from "react";
import {QuestionKeywordChunkState} from "@/interfaces/states/QuestionKeywordChunkState.ts";
import {updateQuestionKeywordChunkState} from "@/stores/slices/questionKeywordChunk.slice.ts";

export const useQuestionKeywordChunks = () => {
    const dispatch = useDispatch<AppDispatch>();
    const questionKeywordChunkState = useSelector((state: RootState) => state.questionKeywordChunkState);

    useEffect(() => {
        const fetchData: QuestionKeywordChunkState[] = [
            {
                id: 1,
                keyword: "자료구조",
                question: "대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어 (200자 이내)",
                answerCount: 2,
            },
            {
                id: 2,
                keyword: "자료구조",
                question: "대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어 (200자 이내)",
                answerCount: 6,
            },
            {
                id: 3,
                keyword: "자료구조",
                question: "대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어 (200자 이내)",
                answerCount: 7,
            },
            {
                id: 4,
                keyword: "자료구조",
                question: "대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어 (200자 이내)",
                answerCount: 4,
            },
            {
                id: 5,
                keyword: "자료구조",
                question: "대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어 (200자 이내)",
                answerCount: 3,
            },
            {
                id: 6,
                keyword: "자료구조",
                question: "대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어 (200자 이내)",
                answerCount: 11,
            },
            {
                id: 7,
                keyword: "자료구조",
                question: "대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어 (200자 이내)",
                answerCount: 2,
            },
            {
                id: 8,
                keyword: "자료구조",
                question: "대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어 (200자 이내)",
                answerCount: 8,
            },
            {
                id: 9,
                keyword: "자료구조",
                question: "대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어려움을 느꼇다.대충 ~~~에서 어 (200자 이내)",
                answerCount: 3,
            }
        ]

        dispatch(updateQuestionKeywordChunkState(fetchData));
    }, [dispatch]);

    return questionKeywordChunkState;
}