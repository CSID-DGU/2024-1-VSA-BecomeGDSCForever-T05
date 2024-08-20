import styled from "styled-components";

export const Container = styled.div`
    height: 88px;
    width: 840px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: row;
`;

export const Input = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    height: 88px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: row;
    width: 600px;
    height: 20px;
    justify-content: flex-end;
    align-items: center;
`;

export const RoomMaker = styled.a<{ isParticipated: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49px;
    height: 20px;

    color: ${({theme}) => theme.colorSystem.neutral["700"]};

    cursor: ${({isParticipated}) => isParticipated ? "default" : "pointer"};
`;