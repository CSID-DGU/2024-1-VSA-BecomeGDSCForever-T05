import styled from "styled-components";

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
    padding: ${(props) => props.padding || "10px 0px"};
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    cursor: ${(props) => (props.onClick ? "pointer" : "default")};
`;