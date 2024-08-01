import * as Styled from "./style.ts";
import arrowLeft from '@/assets/icons/ArrowLeft.svg';

interface ArrowProps {
    onClick: () => void;
}

export default function Arrow({ onClick }: ArrowProps) {
    return (
        <Styled.Container onClick={onClick}>
            <img src={arrowLeft} alt="arrowLeft" />
        </Styled.Container>
    );
}
