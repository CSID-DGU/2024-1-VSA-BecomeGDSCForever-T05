import * as Styled from "./style.ts";
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";

interface ButtonProps {
    isParticipated?: boolean;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <Styled.Container isParticipated={props.isParticipated} onClick={props.onClick}>
            <H1
                color={props.isParticipated ? theme.colorSystem.neutral["500"] : theme.colorSystem.white}
                textAlign={"center"}
                text={"참여하기"}
            />
        </Styled.Container>
    );
}
