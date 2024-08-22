import * as Styled from "./style.ts";
import Login from "@/components/Entry/Login";
import {useState} from "react";
import SignUp from "@/components/Entry/SignUp";

export default function Auth() {

    /* --------------------------------------------------------------------------- */
    /* Login Form State ---------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

    /**
     * @date 2024-08-22
     * @author Changseop Yun
     * @description Login Toggle Form
     */
    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <Styled.Container>
            {isLoginForm ? <Login toggleForm={toggleForm}/> : <SignUp onClick={toggleForm}/>}
        </Styled.Container>
    );
}
