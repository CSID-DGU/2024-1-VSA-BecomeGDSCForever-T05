import * as Styled from "./style.ts";
import SizedBox from "@/components/Common/SizedBox";
import Label from "@/components/Entry/FormItem/label";
import InputField from "@/components/Entry/FormItem/Input";
import RadiusButton from "@/components/Entry/FormItem/Button/RadiusButton";
import {useNavigate} from "react-router-dom";
import {CONSTANT} from "@/constants/Constant.ts";
import React, {useEffect, useState} from "react";
import {postFormLogin} from "@/apis/auth";
import Alert from "@/components/Common/Alert";

interface SignUpProps {
    toggleForm: () => void;
}

export default function LoginForm({toggleForm}: SignUpProps) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    // useNavigate
    const navigate = useNavigate();

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {

        if (isValid) {

            try {
                const response = await postFormLogin({email, password});

                if (response.success) {
                    navigate(CONSTANT.ROUTER.HOME);
                }
            } catch (error) {
                setIsAlertOpen(true);
                setAlertMessage(error.response.data.error.message);
            }
        } else {
            setIsAlertOpen(true);
            setAlertMessage("이메일 또는 비밀번호를 확인해주세요.")
        }
    }

    useEffect(() => {
        if (CONSTANT.REGEX.EMAIL.test(email) && CONSTANT.REGEX.PASSWORD.test(password)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [email, password]);

    return (
        <Styled.Container>
            <SizedBox width={"760px"} height={"293px"}/>
            <Styled.Form>
                <Styled.Title>로그인</Styled.Title>
                <SizedBox width={"600px"} height={"60px"}/>
                <Label text={"이메일"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <InputField placeholder={"이메일을 입력하세요."} width={"600px"} onChange={handleEmail}/>
                <SizedBox width={"600px"} height={"48px"}/>
                <Label text={"비밀번호"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <InputField placeholder={"비밀번호를 입력하세요."} width={"600px"} type={"password"} onChange={handlePassword}/>
                <SizedBox width={"600px"} height={"48px"}/>
                <RadiusButton content={"로그인"} onClick={handleLogin} isValid={isValid}/>
                <SizedBox width={"600px"} height={"24px"}/>
                <Styled.SignUpTextContainer>
                    계정이 없으신가요? <Styled.SignUpLink onClick={toggleForm}>회원가입</Styled.SignUpLink>
                </Styled.SignUpTextContainer>
            </Styled.Form>
            {
                isAlertOpen && <Alert title={alertMessage} onClick={() => setIsAlertOpen(false)}/>
            }
        </Styled.Container>
    );
}
