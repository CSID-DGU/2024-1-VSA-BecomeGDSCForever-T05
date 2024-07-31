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

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;

export const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
`;

export const ModalButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

export const RowCon = styled.div`
  display: wrap;
  justify-content: center;
  align-items: center;
`;
