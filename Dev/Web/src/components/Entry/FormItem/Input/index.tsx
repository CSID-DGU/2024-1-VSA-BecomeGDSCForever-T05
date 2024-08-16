import * as Styled from "./style.ts";
import React, {useState} from "react";
import EyeIcon from "@/assets/icons/Eye.svg";
import EyeIconNo from "@/assets/icons/EyeBlind.svg";

interface props {
    placeholder: string;
    width?: string;
    type?: string;
    borderRadius?: string;
    height?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField(props: props) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        props.type === "password" ?
            <Styled.InputFieldContainer width={props.width}>
                <Styled.PasswordContainer>
                    <Styled.InputContainer
                        type={passwordVisible ? 'email' : 'password'}
                        placeholder={props.placeholder}
                        borderRadius={props.borderRadius}
                        onChange={props.onChange}
                    />
                    <Styled.ToggleButton onClick={togglePasswordVisibility}>
                        <img src={passwordVisible ? EyeIconNo : EyeIcon} alt="Toggle visibility"/>
                    </Styled.ToggleButton>
                </Styled.PasswordContainer>
            </Styled.InputFieldContainer>
            :
            <Styled.InputFieldContainer width={props.width}>
                <Styled.InputContainer type={props.type || 'email'} placeholder={props.placeholder}
                                       borderRadius={props.borderRadius} onChange={props.onChange}/>
            </Styled.InputFieldContainer>
    );
}
