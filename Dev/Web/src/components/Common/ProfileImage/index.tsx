import * as Styled from "./style.ts";

interface ProfileImageProps {
    width?: string;
    height?: string;
    padding?: string;
    src: string;
    alt?: string;
    onClick?: () => void;
    new?: boolean; // 새로운 내용이 있을 때 우측 상단에 빨간 점을 띄우기 위함.
}

export default function ProfileImage(props: ProfileImageProps) {
    return (
        <Styled.ProfileImageWrapper>
            <Styled.ProfileImage width={props.width} height={props.height} padding={props.padding} src={props.src}
                                 alt={props.alt || "Profile Image"} onClick={props.onClick}/>
            {props.new && <Styled.NotificationDot/>} {/* new가 true일 때 빨간 점을 표시 */}
        </Styled.ProfileImageWrapper>
    );
}