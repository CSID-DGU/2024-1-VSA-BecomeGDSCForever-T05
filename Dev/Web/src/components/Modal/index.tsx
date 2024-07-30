import React from "react";
import * as S from "./style";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <h2>모듈락 개설하기</h2>
        <S.Label>방 이름</S.Label>
        <S.Input type="text" placeholder="검색검색검색" />

        <S.Label>질문 시간</S.Label>
        <div>
          <S.Input
            type="number"
            placeholder="1"
            style={{ width: "48%", marginRight: "4%" }}
          />
          <S.Input type="number" placeholder="30" style={{ width: "48%" }} />
        </div>

        <S.Label>사용 언어</S.Label>
        <S.Input type="text" placeholder="#Java #C++ #OOP" />

        <S.Button onClick={onClose}>개설하기</S.Button>
        <S.Button
          onClick={onClose}
          style={{ backgroundColor: "#ccc", color: "#000" }}
        >
          취소하기
        </S.Button>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Modal;
