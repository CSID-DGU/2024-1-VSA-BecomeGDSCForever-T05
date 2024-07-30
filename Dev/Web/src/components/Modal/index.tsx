import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  text-align: center;
`;

const Button = styled.button`
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
`;

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <h2>모듈락 개설하기</h2>
        <Label>방 이름</Label>
        <Input type="text" placeholder="검색검색검색" />

        <Label>질문 시간</Label>
        <div>
          <Input
            type="number"
            placeholder="1"
            style={{ width: "48%", marginRight: "4%" }}
          />
          <Input type="number" placeholder="30" style={{ width: "48%" }} />
        </div>

        <Label>사용 언어</Label>
        <Input type="text" placeholder="#Java #C++ #OOP" />

        <Button onClick={onClose}>개설하기</Button>
        <Button
          onClick={onClose}
          style={{ backgroundColor: "#ccc", color: "#000" }}
        >
          취소하기
        </Button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
