import * as Styled from "./style.ts";
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";

interface ButtonProps {
    isParticipated?: boolean;
}

export default function Button({ isParticipated }: ButtonProps) {
    return (
        <Styled.Container isParticipated={isParticipated}>
            <H1
                color={isParticipated ? theme.colorSystem.neutral["500"] : theme.colorSystem.white }
                textAlign={"center"}
                text={"참여하기"}
            />
        </Styled.Container>
    );
}
