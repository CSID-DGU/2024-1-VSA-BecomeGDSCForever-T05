import styled from "styled-components";

export const ProfileImageWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

export interface ProfileImageProps {
    src: string;
    alt?: string;
    height?: string;
    width?: string;
    padding?: string;
    onClick?: () => void;
}

export const ProfileImage = styled.img<ProfileImageProps>`
    display: flex;
    height: ${(props) => props.height || "auto"};
    width: ${(props) => props.width || "auto"};
    padding: ${(props) => props.padding || "0px"};
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    cursor: ${(props) => (props.onClick ? "pointer" : "default")};
`;

export const NotificationDot = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 17.684px;
    height: 17.684px;
    border: none;
    background-color: ${({theme}) => theme.colorSystem.red["500"]};
    border-radius: 50%;
`;