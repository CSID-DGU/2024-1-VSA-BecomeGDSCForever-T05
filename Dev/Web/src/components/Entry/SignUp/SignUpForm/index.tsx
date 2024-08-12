import * as Styled from "./style.ts";
import SizedBox from "@/components/Common/SizedBox";
import Label from "@/components/Entry/FormItem/label";
import InputField from "@/components/Entry/FormItem/Input";
import RectangleButton from "@/components/Entry/FormItem/Button/RectangleButton";
import RadiusButton from "@/components/Entry/FormItem/Button/RadiusButton";
import {useNavigate} from "react-router-dom";
import {CONSTANT} from "@/constants/Constant.ts";


export default function SignUpForm() {

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate(CONSTANT.ROUTER.HOME);
    }

    return (
        <Styled.Container>
            <SizedBox width={"1160px"} height={"132px"}/>
            <Styled.Form>
                <Styled.Title>회원가입</Styled.Title>
                <SizedBox width={"600px"} height={"60px"}/>
                <Label text={"이름"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <InputField placeholder={"이름을 입력하세요."} width={"800px"}/>
                <SizedBox width={"600px"} height={"32px"}/>
                <Label text={"이메일"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <Styled.Email>
                    <InputField placeholder={"이메일을 입력하세요."} width={"298px"}/>
                    <Styled.AtMark>@</Styled.AtMark>
                    <InputField placeholder={"이메일을 입력하세요."} width={"458px"}/>
                    <SizedBox width={"20px"} height={"60px"}/>
                    <RectangleButton content={"인증번호 받기"}/>
                </Styled.Email>
                <SizedBox width={"600px"} height={"32px"}/>
                <Label text={"인증번호"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <Styled.AuthCode>
                    <InputField placeholder={"인증번호를 입력하세요."} width={"800px"}/>
                    <SizedBox width={"20px"} height={"60px"}/>
                    <RectangleButton content={"인증하기"}/>
                </Styled.AuthCode>
                <SizedBox width={"600px"} height={"32px"}/>
                <Label text={"비밀번호"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <InputField placeholder={"비밀번호를 입력하세요."} width={"800px"} type={"password"}/>
                <SizedBox width={"600px"} height={"32px"}/>
                <Label text={"비밀번호 확인"}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <InputField placeholder={"비밀번호를 입력하세요."} width={"800px"} type={"password"}/>
                <SizedBox width={"600px"} height={"48px"}/>
                <RadiusButton content={"가입하기"} onClick={handleSignUp}/>
            </Styled.Form>
        </Styled.Container>
    );
}
