import {useEffect, useState} from "react";
import * as Styled from "./style.ts";
import ProfileImage from "@/components/Common/ProfileImage";
import DefaultProfile from "@/assets/icons/Profile/DefaultProfile.svg"
import axios, {AxiosResponse} from "axios";

export interface User {
    id: number;
    name: string;
    src: string | null;
    hasNew: boolean;
}

// 사용자 목록 예시 (서버에서 사용자의 정보를 받아올 예정입니다.)
const defaultUsers: User[] = [
    {id: 1, name: "User1", src: "", hasNew: true},
    {id: 2, name: "User2", src: "", hasNew: false},
    {id: 3, name: "User3", src: "", hasNew: true},
    {id: 4, name: "User4", src: "", hasNew: false},
    {id: 5, name: "User5", src: "", hasNew: false},
    {id: 6, name: "User6", src: "", hasNew: true},
    {id: 7, name: "User7", src: "", hasNew: true},
    {id: 8, name: "User8", src: "", hasNew: true},
    {id: 9, name: "User9", src: "", hasNew: false},
    {id: 10, name: "User10", src: "", hasNew: true},
    {id: 11, name: "User11", src: "", hasNew: false},
    {id: 12, name: "User12", src: "", hasNew: false},
    {id: 13, name: "User13", src: "", hasNew: true},
    {id: 14, name: "User14", src: "", hasNew: true},
]

// Axios를 사용해 서버에서 사용자 데이터를 가져오는 함수(실제 API가 작성되면, src/hooks에 파일을 만들어 작성할 예정입니다.)
const fetchUserData = async (): Promise<User[]> => {
    try {
        const response: AxiosResponse<User[]> = await axios.get("/api/users"); // 실제 API 엔드포인트로 교체
        return response.data.map(user => ({
            ...user,
            src: user.src || null, // src가 없으면 null로 설정
        }));
    } catch (error) {
        console.error("Failed to fetch user data, using default users.", error);
        return defaultUsers; // 실패 시 기본 사용자 목록 반환
    }
};

export default function IDEMulti() {
    const [users, setUsers] = useState<User[]>(defaultUsers); // 초기값은 기본 사용자 목록

    useEffect(() => {
        const loadUserData = async () => {
            const data = await fetchUserData();
            setUsers(data); // 데이터가 성공적으로 로드되면 상태를 업데이트
        };

        loadUserData();
    }, []);

    return (
        <Styled.Container>
            <Styled.MyProfile onClick={() => alert("My profile Clicked!")}>
                <ProfileImage src={DefaultProfile} width={"56px"} height={"56px"}/>
            </Styled.MyProfile>
            <Styled.Hr/>
            <Styled.UserProfileList>
                {users.map((user: User) => (
                    <Styled.UserProfile key={user.id} onClick={() => alert("User" + user.id + " clicked!")}>
                        <ProfileImage src={user.src || DefaultProfile} width={"56px"} height={"56px"}
                                      new={user.hasNew} alt={"Profile"}/>
                    </Styled.UserProfile>
                ))}
            </Styled.UserProfileList>
        </Styled.Container>
    );
}