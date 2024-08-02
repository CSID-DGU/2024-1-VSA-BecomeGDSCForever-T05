import * as Styled from "./style.ts";
import LoginSvg from "@/components/Entry/Login/LoginSvg";
import LoginForm from "@/components/Entry/Login/LoginForm";

interface LoginFormProps {
    toggleForm: () => void;
}

export default function Login({ toggleForm }: LoginFormProps) {
    return (
        <Styled.Container>
            <LoginSvg/>
            <LoginForm toggleForm={toggleForm}/>
        </Styled.Container>
    );
}