import * as Styled from "./style.ts";
import title from '@/assets/titles/Title.svg';

interface TitleProps{
    width?: string;
    height?: string;
}

export default function Title({width, height}: TitleProps) {
    return (
        <Styled.Container src={title} width = {width} height = {height} alt = {"logo"} ></Styled.Container>
    )
}