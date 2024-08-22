import * as Styled from "./style.ts";
import SizedBox from "@/components/Common/SizedBox";
import Label from "@/components/Entry/FormItem/label";
import InputField from "@/components/Entry/FormItem/Input";
import RectangleButton from "@/components/Entry/FormItem/Button/RectangleButton";
import RadiusButton from "@/components/Entry/FormItem/Button/RadiusButton";
import {useNavigate} from "react-router-dom";
import {CONSTANT} from "@/constants/Constant.ts";
import React, {useEffect, useState} from "react";
import {postRegister, validateAuthCode, validateEmail} from "@/apis/auth";
import Alert from "@/components/Common/Alert";


export default function SignUpForm() {

    /* --------------------------------------------------------------------------- */
    /* Window State -------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const navigate = useNavigate();

    /* --------------------------------------------------------------------------- */
    /* Sign Up Form State -------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
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

    const [temporaryToken, setTemporaryToken] = useState<string>("");

    /* --------------------------------------------------------------------------- */
    /* Alert State---------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");

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

    const handleAuthCodeButtonClick = async () => {

        if (isValidEmail && !isIssued) {

            try {
                const response = await validateEmail(email);

                if (response.success) {
                    setIsIssued(true);
                    setIsAlertOpen(true);
                    setAlertMessage("인증번호가 발송되었습니다.");
                }
            } catch (error) {
                setIsAlertOpen(true);
                setAlertMessage(error.response.data.error.message);
            }
        } else {
            setIsAlertOpen(true);
            setAlertMessage("올바르지 않은 이메일 형식입니다.");
        }
    }

    const handleVerificationButtonClick = async () => {

        if (authCode !== "" && isIssued && !isVerification && CONSTANT.REGEX.AUTH_CODE.test(authCode)) {

            try {
                const response = await validateAuthCode(email, authCode);

                if (response.success) {
                    setIsVerification(true);
                    setTemporaryToken(response.data.temporary_token);
                    setIsAlertOpen(true);
                    setAlertMessage("인증되었습니다.");
                }
            } catch (error) {
                setIsAlertOpen(true);
                setAlertMessage(error.response.data.error.message);
            }
        } else {
            setIsAlertOpen(true);
            setAlertMessage("올바르지 않은 인증번호 형식입니다.");
        }
    }

    const handleSubmitButtonClick = async () => {

        if (isValid) {

            try {
                const response = await postRegister({
                    nickname: name,
                    password: password,
                    temporaryToken: temporaryToken
                });

                if (response.success) {
                    setIsAlertOpen(true);
                    setAlertMessage("회원가입이 완료되었습니다.");

                    navigate(CONSTANT.ROUTER.HOME);
                }
            } catch (error) {
                setIsAlertOpen(true);
                setAlertMessage(error.response.data.error.message);
            }
        } else {
            setIsAlertOpen(true);
            setAlertMessage("입력값을 확인해주세요.");
        }
    }

    return (
        <Styled.Container>
            <SizedBox width={"1160px"} height={"60px"}/>
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
            {
                isAlertOpen && <Alert title={alertMessage} onClick={() => setIsAlertOpen(false)}/>
            }
        </Styled.Container>
    );
}
