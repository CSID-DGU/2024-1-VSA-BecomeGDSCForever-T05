import * as Styled from "./style.ts";
import Login from "@/components/Entry/Login";
import {useState} from "react";
import SignUp from "@/components/Entry/SignUp";

export default function Entry() {
    const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <Styled.Container>
            {isLoginForm ? <Login toggleForm={toggleForm} /> : <SignUp onClick={toggleForm} />}
        </Styled.Container>
    );
}
