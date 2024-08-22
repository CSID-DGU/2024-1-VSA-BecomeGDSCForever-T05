import * as Styled from "./style.ts";
import React from "react";


interface props {
    placeholder: string;
    width?: string;
    borderRadius?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: props) {

    return (
        <Styled.InputFieldContainer>
            <Styled.InputContainer width={props.width} placeholder={props.placeholder} borderRadius={props.borderRadius}
                                   onChange={props.onChange}/>
        </Styled.InputFieldContainer>
    );
}
