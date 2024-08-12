import * as Styled from "./style.ts"
import H3 from "@/components/Common/Font/Heading/H3";
import theme from "@/shared/theme.ts";

interface joinStateProps {
    text?: string;
    id?: number;
}

export default function JoinStateTag(props: joinStateProps) {

    const handleOnClick = () => {
        alert(`${props.id} clicked!`);
    }

    return (
        <Styled.Container onClick={handleOnClick}>
            <H3 text={props.text} color={theme.colorSystem.white}/>
        </Styled.Container>

    )

}