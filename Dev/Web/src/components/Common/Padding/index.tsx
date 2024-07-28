import * as Styled from "./style";

interface PaddingProps {
    horizontal?: string;
    vertical?: string;
    all?: string;
}

export default function Padding(props: PaddingProps) {
    return (
        <Styled.Padding horizontal={props.horizontal} vertical={props.vertical} all={props.all}/>
    )
}