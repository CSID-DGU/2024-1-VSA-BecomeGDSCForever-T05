import * as Styled from "./style";

type Direction = "horizontal" | "vertical";

interface SpacerProps {
    flex: number;
    direction: Direction;
}

export default function Spacer(props: SpacerProps) {
    return (
        <Styled.Spacer flex={props.flex} direction={props.direction}/>
    )
}