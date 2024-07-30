import React from "react";
import * as S from "./style";
import H1 from "../Common/Font/Heading/H1";
import Sub1 from "../Common/Font/Body/Sub1";
import Sub2 from "../Common/Font/Body/Sub2";
import SizedBox from "../Common/SizedBox";
import ModalButton from "./ModalButton";
import theme from "@/shared/theme";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <H1 text="모들락 개설하기" />
        <Sub2
          text="모들락은 여러 사람들이 함께 모여 질문을 하고 대화를 나누며 지식과 경험을 공유하는 공동체적인 소통의 공간입니다. 이곳에서는 다양한 주제에 대한 토론과 협력이 이루어지며, 참여자들이 서로 배우고 성장할 수 있는 기회를 제공합니다."
          textAlign="start"
        />
        <div>
          <Sub1 text="방 이름" textAlign="start" />
          <S.Input type="text" placeholder="방 이름을 입력해주세요" />
        </div>
        <div>
          <Sub1 text="질문 시간" textAlign="start" />
          <div>
            <S.Input
              type="number"
              placeholder="1"
              style={{ width: "48%", marginRight: "4%" }}
            />
            <S.Input type="number" placeholder="30" style={{ width: "48%" }} />
          </div>
        </div>
        <div>
          <Sub1 text="사용 언어" textAlign="start" />
          <S.Input type="text" placeholder="#Java #C++ #OOP" />
        </div>

        <ModalButton onClick={onClose} color={theme.colorSystem.neutral["200"]}>
          취소하기
        </ModalButton>
        <ModalButton onClick={onClose} color={theme.colorSystem.primary["600"]}>
          개설하기
        </ModalButton>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Modal;
