import {AppDispatch, RootState} from "@/stores/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {QuestionSummaryState} from "@/interfaces/states/QuestionSummaryState.ts";
import {fetchQuestionSummaries, updateQuestionSummariesState} from "@/stores/slices/questionSummaries.slice.ts";
import {useEffect} from "react";

export const useQuestionSummaries = (date: Date) => {

    const dispatch = useDispatch<AppDispatch>();
    const questionSummaries = useSelector((state: RootState) => state.questionSummariesState);


    useEffect(() => {

        // Todo: 서버에서 받아온 정보로 업데이트
        console.log("fetch data when date is changed", date.toISOString());

        const fetchData: QuestionSummaryState[] = [
            {
                id: 1,
                title: "자료구조 12강 실습",
                content: "자료구조의 기본 개념과 다양한 데이터 구조의 효율성을 학습하는 실습입니다. 예제 코드와 문제 풀이를 통해 실전 감각을 익힙니다.",
                startedAt: "13:00",
                endedAt: "17:00",
                isAdmin: false,
                tags: ["자료구조", "실습"],
            },
            {
                id: 2,
                title: "알고리즘 12강 실습",
                content: "알고리즘의 복잡도 분석 및 최적화 기법을 다루는 실습입니다. 문제 해결 능력을 키우기 위해 다양한 알고리즘을 구현해봅니다.",
                startedAt: "13:00",
                endedAt: "17:00",
                isAdmin: true,
                tags: ["알고리즘", "실습"],
            },
            {
                id: 3,
                title: "객체지향프로그래밍 12강 실습",
                content: "객체지향 프로그래밍의 기본 원칙을 이해하고, 실제 프로젝트에서 이를 활용하는 방법을 배우는 실습입니다.",
                startedAt: "13:00",
                endedAt: "17:00",
                isAdmin: false,
                tags: ["객체지향", "프로그래밍", "실습"],
            },
            {
                id: 4,
                title: "컴퓨터네트워크 12강 실습",
                content: "컴퓨터 네트워크의 기본 구조와 통신 프로토콜을 이해하는 실습입니다. 네트워크 문제 해결 능력을 기르는 데 중점을 둡니다.",
                startedAt: "13:00",
                endedAt: "17:00",
                isAdmin: false,
                tags: ["네트워크", "실습"],
            },
            {
                id: 5,
                title: "운영체제 12강 실습",
                content: "운영체제의 핵심 기능과 프로세스 관리, 메모리 관리 등의 주제를 다루는 실습입니다. 시스템 자원의 효율적 관리 방법을 학습합니다.",
                startedAt: "13:00",
                endedAt: "17:00",
                isAdmin: true,
                tags: ["운영체제", "실습"],
            }
        ];

        if (!import.meta.env.VITE_APP_SERVER_URL) {
            console.log("fetch data from local");
            dispatch(updateQuestionSummariesState(fetchData));
        } else {
            console.log("fetch data from server")
            dispatch(fetchQuestionSummaries(date));
        }

    }, [dispatch, date]);

    return questionSummaries.data;
}