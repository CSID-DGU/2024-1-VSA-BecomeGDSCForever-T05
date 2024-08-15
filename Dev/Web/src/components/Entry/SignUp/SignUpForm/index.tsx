import * as Styled from "./style.ts";
import SizedBox from "@/components/Common/SizedBox";
import Label from "@/components/Entry/FormItem/label";
import InputField from "@/components/Entry/FormItem/Input";
import RectangleButton from "@/components/Entry/FormItem/Button/RectangleButton";
import RadiusButton from "@/components/Entry/FormItem/Button/RadiusButton";
import {useNavigate} from "react-router-dom";
import {CONSTANT} from "@/constants/Constant.ts";
import React, {useEffect, useState} from "react";


export default function SignUpForm() {

    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [serialId, setSerialId] = useState<string>("");
    const [domain, setDomain] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [authCode, setAuthCode] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<string>("");
    const [isIssued, setIsIssued] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
    const [isValidAuthCode, setIsValidAuthCode] = useState<boolean>(false);
    const [isVerification, setIsVerification] = useState<boolean>(false);

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSerialId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSerialId(e.target.value);
    }

    const handleDomain = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDomain(e.target.value);
    }

    const handleAuthCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthCode(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordCheck(e.target.value);
    }

    useEffect(() => {
        if (serialId !== "" && domain !== "") {
            setEmail(serialId + "@" + domain);
        }
    }, [serialId, domain]);

    useEffect(() => {
        if (serialId === "" || domain === "" || email === "") {
            setIsValidEmail(false);
        } else if (CONSTANT.REGEX.EMAIL.test(email)) {
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }
    }, [email]);

    useEffect(() => {
        if (authCode !== "" && isIssued && !isVerification && CONSTANT.REGEX.AUTH_CODE.test(authCode)) {
            setIsValidAuthCode(true);
        } else {
            setIsValidAuthCode(false);
        }
    }, [authCode, isIssued, isVerification]);

    useEffect(() => {
        if (CONSTANT.REGEX.NICKNAME.test(name) && password === passwordCheck && CONSTANT.REGEX.PASSWORD.test(password)) {
            setIsValid(true);
        }
    }, [name, password, passwordCheck])

    const handleAuthCodeButtonClick = () => {

        if (isValidEmail && !isIssued) {
            alert("인증번호가 발송되었습니다.")
            setIsIssued(true);
        }

    }

    const handleVerificationButtonClick = () => {

        if (authCode !== "" && isIssued && !isVerification && CONSTANT.REGEX.AUTH_CODE.test(authCode)) {
            alert("인증되었습니다.");
            setIsVerification(true);
        }
    }

    const handleSubmitButtonClick = () => {

        if (isValid) {
            alert("회원가입이 완료되었습니다.");
            navigate(CONSTANT.ROUTER.HOME);
        }
    }

    return (
        <Styled.Container>
            <SizedBox width={"1160px"} height={"132px"}/>
            <Styled.Form>
                <Styled.Title>회원가입</Styled.Title>
                <SizedBox width={"600px"} height={"60px"}/>
                <Label text={"이름"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <InputField placeholder={"이름을 입력하세요."} width={"800px"} onChange={handleName}/>
                <SizedBox width={"600px"} height={"32px"}/>
                <Label text={"이메일"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <Styled.Email>
                    <InputField placeholder={"이메일을 입력하세요."} width={"298px"} onChange={handleSerialId}/>
                    <Styled.AtMark>@</Styled.AtMark>
                    <InputField placeholder={"이메일을 입력하세요."} width={"458px"} onChange={handleDomain}/>
                    <SizedBox width={"20px"} height={"60px"}/>
                    <RectangleButton content={"인증번호 받기"} isIssued={isValidEmail && !isIssued}
                                     onClick={handleAuthCodeButtonClick}/>
                </Styled.Email>
                <SizedBox width={"600px"} height={"32px"}/>
                <Label text={"인증번호"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <Styled.AuthCode>
                    <InputField placeholder={"인증번호를 입력하세요."} width={"800px"} onChange={handleAuthCode}/>
                    <SizedBox width={"20px"} height={"60px"}/>
                    <RectangleButton content={"인증하기"}
                                     isIssued={isValidAuthCode}
                                     onClick={handleVerificationButtonClick}/>
                </Styled.AuthCode>
                <SizedBox width={"600px"} height={"32px"}/>
                <Label text={"비밀번호"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <InputField placeholder={"비밀번호를 입력하세요."} width={"800px"} type={"password"} onChange={handlePassword}/>
                <SizedBox width={"600px"} height={"32px"}/>
                <Label text={"비밀번호 확인"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <InputField placeholder={"비밀번호를 입력하세요."} width={"800px"} type={"password"}
                            onChange={handlePasswordCheck}/>
                <SizedBox width={"600px"} height={"48px"}/>
                <RadiusButton content={"가입하기"} onClick={handleSubmitButtonClick} isValid={isValid}/>
            </Styled.Form>
        </Styled.Container>
    );
}
