import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(146, 146, 165, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2000;
`;

export const ModalContainer = styled.div`
    display: flex;
    width: 440px;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    background: #fff;
    border-radius: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #D4D4E3;
    border-radius: 12px;
`;
