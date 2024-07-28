import * as Styled from './style.ts'

interface SizedBoxProps {
    width?: string;
    height?: string;
}

export default function SizedBox(props: SizedBoxProps) {

    return (
        <Styled.SizedBox height={props.height} width={props.width}/>
    );
}