import styled from "styled-components";
import {SvgButtonProps} from "@/interfaces/props/SvgButtonProps.ts";

export const SvgButton = styled.button<SvgButtonProps>`
    background-image: url(${(props) => props.src});
    background-size: cover;
    width: ${(props) => props.width || "24px"};
    height: ${(props) => props.height || "24px"};
    background-color: ${(props) => props.color || "transparent"};
    top: ${(props) => props.top || "0"};
    right: ${(props) => props.right || "0"};
    bottom: ${(props) => props.bottom || "0"};
    left: ${(props) => props.left || "0"};
    border: none;
`;

export const Container = styled.div`
    display: flex;
    width: 1120px;
    max-width: 1120px;

    height: 80vh;
    padding: 20px;
    flex-direction: column;
    justify-content: start;

    margin: 0 auto;

    background: #ffffff;
    border-radius: 20px;
`;


export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: start;

    overflow: scroll;
`;
