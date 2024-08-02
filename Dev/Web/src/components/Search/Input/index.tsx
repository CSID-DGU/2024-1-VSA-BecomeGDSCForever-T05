import * as Styled from "./style.ts";


interface InputFieldProps {
    placeholder: string;
    width?: string;
    borderRadius?: string;
}

export default function Input({ placeholder, width, borderRadius }: InputFieldProps) {

    return (
            <Styled.InputFieldContainer>
                <Styled.InputContainer width={width} placeholder={placeholder} borderRadius={borderRadius} />
            </Styled.InputFieldContainer>
    );
}
