import * as Styled from "./style.ts";
import { useState } from "react";
import EyeIcon from "@/assets/icons/Eye.svg";
import EyeIconNo from "@/assets/icons/EyeBlind.svg";

interface InputFieldProps {
    placeholder: string;
    width?: string;
    type?: string;
    borderRadius?: string;
    height?: string;
}

export default function InputField({ placeholder, width, type, borderRadius }: InputFieldProps) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        type === "password" ?
            <Styled.InputFieldContainer width={width}>
                <Styled.PasswordContainer>
                    <Styled.InputContainer
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder={placeholder}
                        borderRadius={borderRadius}
                    />
                    <Styled.ToggleButton onClick={togglePasswordVisibility}>
                        <img src={passwordVisible ? EyeIconNo : EyeIcon} alt="Toggle visibility" />
                    </Styled.ToggleButton>
                </Styled.PasswordContainer>
            </Styled.InputFieldContainer>
            :
            <Styled.InputFieldContainer width={width}>
                <Styled.InputContainer type={type || 'text'} placeholder={placeholder} borderRadius={borderRadius} />
            </Styled.InputFieldContainer>
    );
}
