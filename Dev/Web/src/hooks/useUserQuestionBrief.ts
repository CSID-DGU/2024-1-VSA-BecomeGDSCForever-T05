import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {UserQuestionBriefState} from "@/interfaces/states/UserQuestionBriefState.ts";
import {useEffect} from "react";
import {updateUserQuestionBrief} from "@/stores/slices/userQuestionBrief.slice.ts";

export const useUserQuestionBrief = () => {

    const dispatch = useDispatch<AppDispatch>();
    const userQuestionBriefState = useSelector((state: RootState) => state.userQuestionBriefState);

    useEffect(() => {
        const fetchData: UserQuestionBriefState[] = [
            {
                id: 1,
                keyword: "자료구조",
                description: "자료구조의 기본 개념과 다양한 데이터 구조의 효율성을 학습하는 실습입니다. 예제 코드와 문제 풀이를 통해 실전 감각을 익힙니다.",
                createdAt: "12분 전 질문"
            },
            {
                id: 2,
                keyword: "알고리즘",
                description: "알고리즘의 복잡도 분석 및 최적화 기법을 다루는 실습입니다. 문제 해결 능력을 키우기 위해 다양한 알고리즘을 구현해봅니다.",
                createdAt: "1시간 전 질문"
            },
            {
                id: 3,
                keyword: "객체지향프로그래밍",
                description: "객체지향 프로그래밍의 기본 원칙을 이해하고, 실제 프로젝트에서 이를 활용하는 방법을 배우는 실습입니다.",
                createdAt: "2시간 전 질문"
            },
            {
                id: 4,
                keyword: "컴퓨터네트워크",
                description: "컴퓨터 네트워크의 기본 구조와 통신 프로토콜을 이해하는 실습입니다. 네트워크 문제 해결 능력을 기르는 데 중점을 둡니다.",
                createdAt: "3시간 전 질문"
            },
            {
                id: 5,
                keyword: "운영체제",
                description: "운영체제의 핵심 기능과 프로세스 관리, 메모리 관리 등의 주제를 다루는 실습입니다. 시스템 자원의 효율적 관리 방법을 학습합니다.",
                createdAt: "4시간 전 질문"
            },
            {
                id: 6,
                keyword: "데이터베이스",
                description: "데이터베이스의 기본 개념과 SQL 쿼리 작성 방법을 배우는 실습입니다. 데이터베이스 설계 및 관리 능력을 키웁니다.",
                createdAt: "5시간 전 질문"
            },
            {
                id: 7,
                keyword: "웹프로그래밍",
                description: "웹 프로그래밍의 기본 개념과 프론트엔드, 백엔드 개발 방법을 학습하는 실습입니다. 프로젝트를 통해 실전 감각을 키웁니다.",
                createdAt: "6시간 전 질문"
            },
            {
                id: 8,
                keyword: "데이터베이스",
                description: "데이터베이스의 기본 개념과 SQL 쿼리 작성 방법을 배우는 실습입니다. 데이터베이스 설계 및 관리 능력을 키웁니다.",
                createdAt: "7시간 전 질문"
            },
            {
                id: 9,
                keyword: "웹프로그래밍",
                description: "웹 프로그래밍의 기본 개념과 프론트엔드, 백엔드 개발 방법을 학습하는 실습입니다. 프로젝트를 통해 실전 감각을 키웁니다.",
                createdAt: "8시간 전 질문"
            },
        ];

        dispatch(updateUserQuestionBrief(fetchData));
    }, [dispatch]);

    return userQuestionBriefState;
}