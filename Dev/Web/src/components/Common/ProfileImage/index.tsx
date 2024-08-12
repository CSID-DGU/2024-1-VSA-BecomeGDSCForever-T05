import * as Styled from "./style.ts";

interface ProfileImageProps {
    width?: string;
    height?: string;
    padding?: string;
    src: string;
    alt?: string;
    onClick?: () => void;
}

export default function ProfileImage(props: ProfileImageProps) {
    return (
        <Styled.ProfileImage width={props.width} height={props.height} padding={props.padding} src={props.src}
                             alt={props.alt || "Profile Image"} onClick={props.onClick}/>
    );
}