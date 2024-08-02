import * as Styled from "./style.ts";
import SignUpSvg from "@/components/Entry/SignUp/SignUpSvg";
import SignUpForm from "@/components/Entry/SignUp/SignUpForm";

interface SignUpProps {
    onClick: () => void;
}

export default function SignUp({ onClick }: SignUpProps) {
    return (
        <Styled.Container>
            <SignUpSvg onClick={onClick} />
            <SignUpForm />
        </Styled.Container>
    );
}
