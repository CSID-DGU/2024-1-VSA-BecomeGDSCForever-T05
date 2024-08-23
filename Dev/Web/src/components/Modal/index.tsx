import React, {useEffect} from "react";
// import { useSelector } from "react-redux";
import * as S from "./style";
import H1 from "../Common/Font/Heading/H1";
import Sub1 from "../Common/Font/Body/Sub1";
import Sub2 from "../Common/Font/Body/Sub2";
import Row from "../Common/Row";
import ModalButton from "./ModalButton";
import theme from "@/shared/theme";
import SizedBox from "@/components/Common/SizedBox";
import {useModeullakBrief} from "@/hooks/modeullak/useModeullakBrief.ts";
import {createModeullak, joinModeullak} from "@/apis/modeullak";
import {useNavigate} from "react-router-dom";
import {CONSTANT} from "@/constants/Constant.ts";
import Alert from "@/components/Common/Alert";

interface ModalProps {
    onClose: () => void;
    type: "create" | "join";
    modeullakCode?: string;
}

interface ModuleTime {
    times: number;
    minutes: number;
}

const Modal: React.FC<ModalProps> = (props) => {
    // const userRole = useSelector((state: any) => state.userRole);
    const [roomName, setRoomName] = React.useState<string>("");
    const [questionTime, setQuestionTime] = React.useState<ModuleTime>({
        times: 1,
        minutes: 30,
    });
    const [languageList, setLanguageList] = React.useState<string[]>([]);
    const [isAlertOpen, setIsAlertOpen] = React.useState<boolean>(false);
    const [alertMessage, setAlertMessage] = React.useState<string>("");

    const navigate = useNavigate();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const modeullakBriefState = props.modeullakCode ? useModeullakBrief(props.modeullakCode!) : null;

    const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // #를 기준으로 나누고 빈 문자열을 필터링
        const languages = value
            .split("#")
            .map((lang) => lang.trim())
            .filter((lang) => lang.length > 0);
        setLanguageList(languages);
    };

    const handleOnClick = async () => {

        if (props.type === "create") {

            try {
                const response = await createModeullak({
                    title: roomName,
                    tags: languageList,
                    hour: questionTime.times,
                    minute: questionTime.minutes,
                })

                if (response.success) {
                    navigate(CONSTANT.ROUTER.CODE + `/${response.data.id}`);
                }
            } catch (error) {
                setIsAlertOpen(true);
                setAlertMessage(error.response.data.error.message);
            }
        } else if (props.type === "join") {

            try {
                const response = await joinModeullak({
                    modeullakId: modeullakBriefState.id,
                    participationCode: props.modeullakCode!,
                })

                if (response.success) {
                    navigate(CONSTANT.ROUTER.CODE + `/${modeullakBriefState.id}`);
                }
            } catch (error) {
                setIsAlertOpen(true);
                setAlertMessage(error.response.data.error.message);
            }
        }
    }

    // 모달이 열릴 때 body의 스크롤을 막음
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    return (
        <S.ModalBackground>
            <S.ModalContainer>
                {
                    props.type === "create" ? (
                        <H1 text="모들락 개설하기"/>
                    ) : (
                        <H1 text="모들락 참여하기"/>
                    )
                }
                <Sub2
                    text="모들락은 여러 사람들이 함께 모여 질문을 하고 대화를 나누며 지식과 경험을 공유하는 공동체적인 소통의 공간입니다. 이곳에서는 다양한 주제에 대한 토론과 협력이 이루어지며, 참여자들이 서로 배우고 성장할 수 있는 기회를 제공합니다."
                    textAlign="start"
                    color={theme.colorSystem.neutral["700"]}
                />
                <Sub1 text="방 이름" textAlign="start"/>
                {
                    props.type === "create" ? (
                        <S.Input
                            type="text"
                            placeholder="방 이름을 입력해주세요"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                        />
                    ) : (
                        <S.Name>{modeullakBriefState!.title}</S.Name>
                    )
                }
                <Sub1 text="질문 시간" textAlign="start"/>
                <Row justifyContent="start" alignItems="center">
                    {
                        props.type === "create" ? (
                            <S.Input
                                type="number"
                                placeholder="1"
                                style={{width: "180px"}}
                                value={questionTime.times}
                                onChange={(e) =>
                                    setQuestionTime({
                                        ...questionTime,
                                        times: parseInt(e.target.value),
                                    })
                                }
                            />
                        ) : (
                            <S.Name style={{width: "180px"}}>{modeullakBriefState!.remainedHour}</S.Name>
                        )
                    }

                    <SizedBox width="8px"/>

                    <Sub1 text="시간" textAlign="start"/>

                    <SizedBox width="8px"/>

                    {
                        props.type === "create" ? (
                            <S.Input
                                type="number"
                                placeholder="30"
                                style={{width: "180px"}}
                                value={questionTime.minutes}
                                onChange={(e) =>
                                    setQuestionTime({
                                        ...questionTime,
                                        minutes: parseInt(e.target.value),
                                    })
                                }
                            />
                        ) : (
                            <S.Name style={{width: "180px"}}>{modeullakBriefState!.remainedMinute}</S.Name>
                        )
                    }

                    <SizedBox width="8px"/>

                    <Sub1 text="분" textAlign="start"/>
                </Row>
                <Sub1 text="해시태그" textAlign="start"/>
                {
                    props.type === "create" ? (
                        <S.Input
                            type="text"
                            placeholder="#Java #C++ #OOP"
                            onChange={handleLanguageChange}
                        />
                    ) : (
                        <S.Name>{modeullakBriefState!.tags.map(tag => `#${tag}`).join(" ")}</S.Name>
                    )
                }
                {
                    props.type === "join" && (
                        <Sub2
                            text="참여자들이 현재의 대화와 토론에 집중하고 충실하게 참여할 수 있도록 하기 위해 모들락에 참여하게 되면, 관리자가 해당 모들락을 종료하거나 정해진 시간이 끝날 때까지는 다른 모들락에 접속할 수 없습니다."
                            textAlign="start"
                            color={theme.colorSystem.red["500"]}
                        />
                    )
                }
                <ModalButton onClick={props.onClose} color={theme.colorSystem.neutral["200"]}>
                    취소하기
                </ModalButton>
                <ModalButton onClick={handleOnClick} color={theme.colorSystem.primary["600"]}>
                    {props.type === "create" ? "개설하기" : "참여하기"}
                </ModalButton>
            </S.ModalContainer>
            {
                isAlertOpen && (
                    <Alert title={alertMessage} onClick={() => setIsAlertOpen(false)}/>
                )
            }
        </S.ModalBackground>
    );
};

export default Modal;
