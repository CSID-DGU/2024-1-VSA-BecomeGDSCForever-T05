import styled from "styled-components";
import theme from "@/shared/theme";
import ModalButtonProps from "@/interfaces/props/ModalButtonProps.ts";

export const ModalButton = styled.button<ModalButtonProps>`
    background-color: ${(props) =>
            props.color || theme.colorSystem.primary["600"]};
    font-size: ${theme.fontSystem.h1.fontSize};
    font-weight: ${theme.fontSystem.h1.fontWeight};
    text-align: ${(props) => props.textAlign || "center"};
    color: ${(props) => {
        if (props.color === theme.colorSystem.neutral["200"]) {
            return theme.colorSystem.neutral["500"];
        } else if (props.color === theme.colorSystem.primary["600"]) {
            return "#ffffff";
        } else {
            return "inherit";
        }
    }};
    display: flex;
    width: 100%;
    padding: 15px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    border: none;

    cursor: pointer;
`;
