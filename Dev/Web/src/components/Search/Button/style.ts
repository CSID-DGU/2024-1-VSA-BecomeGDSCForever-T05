import styled from "styled-components";

interface ContainerProps {
    isParticipated?: boolean;
}

export const Container = styled.button<ContainerProps>`
    width: 160px;
    height: 60px;
    background-color: ${({theme, isParticipated}) =>
            isParticipated ? theme.colorSystem.neutral["200"] : theme.colorSystem.primary["500"]};
    border-radius: 34px;
    border: none;

    display: flex;
    padding: 15px 38px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    margin-bottom: 28px;
    gap: 10px;

    &:hover {
        background-color: ${({theme, isParticipated}) =>
                !isParticipated && theme.colorSystem.primary["400"]};
    }
`;
