import * as Styled from "./style.ts";
import SizedBox from "@/components/Common/SizedBox";
import Label from "@/components/Entry/FormItem/label";
import InputField from "@/components/Entry/FormItem/Input";
import RadiusButton from "@/components/Entry/FormItem/Button/RadiusButton";
import {useNavigate} from "react-router-dom";
import {CONSTANT} from "@/constants/Constant.ts";

interface SignUpProps {
    toggleForm: () => void;
}

export default function LoginForm({toggleForm}: SignUpProps) {

    // useNavigate
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate(CONSTANT.ROUTER.HOME);
    }

    return (
        <Styled.Container>
            <SizedBox width={"760px"} height={"293px"}/>
            <Styled.Form>
                <Styled.Title>로그인</Styled.Title>
                <SizedBox width={"600px"} height={"60px"}/>
                <Label text={"이메일"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <InputField placeholder={"이메일을 입력하세요."} width={"600px"}/>
                <SizedBox width={"600px"} height={"48px"}/>
                <Label text={"비밀번호"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <InputField placeholder={"비밀번호를 입력하세요."} width={"600px"} type={"password"}/>
                <SizedBox width={"600px"} height={"48px"}/>
                <RadiusButton content={"로그인"} onClick={handleLogin}/>
                <SizedBox width={"600px"} height={"24px"}/>
                <Styled.SignUpTextContainer>
                    계정이 없으신가요? <Styled.SignUpLink onClick={toggleForm}>회원가입</Styled.SignUpLink>
                </Styled.SignUpTextContainer>
            </Styled.Form>
        </Styled.Container>
    );
}
