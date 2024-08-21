import * as Styled from "./style.ts";
import {useEffect} from "react";
import {RootState} from "@/stores/store.ts";
import {useSelector} from "react-redux";
import UserKeyword from "@/components/ModeullakDetail/KeywordModal/UserKeyword";
import CoreKeyword from "@/components/ModeullakDetail/KeywordModal/CoreKeyword";

export default function KeywordModal() {

    const keywordModalState = useSelector((state: RootState) => state.keywordModalState);

    // External Scroll Lock
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <Styled.Background>
            {
                keywordModalState.type === "user" ? (
                    <UserKeyword/>
                ) : (
                    <CoreKeyword/>
                )
            }
        </Styled.Background>
    )
}