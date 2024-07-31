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
`;

export const ModalContainer = styled.div`
  display: flex;
  width: 480px;
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
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;
