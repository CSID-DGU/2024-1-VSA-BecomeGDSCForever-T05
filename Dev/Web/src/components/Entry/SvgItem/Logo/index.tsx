import * as Styled from "./style.ts";
import logo from '@/assets/icons/Logo.svg';

interface LogoProps{
    width?: string;
    height?: string;
}

export default function Logo({width, height}: LogoProps) {
    return (
        <Styled.Container src={logo} width={width}  height={height} alt={"logo"} />
    )
}
