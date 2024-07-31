import * as Styled from "./style.ts";
import ModalButtonProps from "@/interfaces/Modal/ModalButton/ModalButtonProps";

export default function ModalButton(props: ModalButtonProps) {
  return (
    <Styled.ModalButton
      color={props.color}
      textAlign={props.textAlign}
      onClick={props.onClick}
    >
      {props.children}
    </Styled.ModalButton>
  );
}
