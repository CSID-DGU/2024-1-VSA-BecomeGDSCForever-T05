import * as Styled from "./style.ts";
import Input from "@/components/Search/Input";
import SizedBox from "@/components/Common/SizedBox";
import Sub1 from "@/components/Common/Font/Body/Sub1";
import theme from "@/shared/theme.ts";
import Button from "@/components/Search/Button";
import Modal from "@/components/Modal";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import {checkModeullakCode} from "@/apis/modeullak";
import Alert from "@/components/Common/Alert";


export default function Search() {

    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<"create" | "join">("create");
    const [modeullakCode, setModeullakCode] = useState("");

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [placeHolderMessage, setPlaceHolderMessage] = useState<string>("모들락을 검색해주세요.");
    const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);

    const handleAlertClose = () => {
        setIsAlertOpen(false);
    }

    const participatedModeullakState = useSelector((state: RootState) => state.participatedModeullakState);


    // 참여중인 모들락이 있을 경우, placeholder 메시지 변경
    useEffect(() => {
        if (participatedModeullakState.modeullakId !== null) {
            setPlaceHolderMessage("현재 참여중인 모들락이 종료된 후에 다른 모들락에 참여할 수 있습니다.");
            setIsInputDisabled(true);
        }

    }, [participatedModeullakState.modeullakId]);

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModeullakCode(e.target.value);
    }

    const handleCreateOpen = () => {

        if (participatedModeullakState.modeullakId === null) {
            setModalType("create")
            setIsOpen(true);
        }
    }

    const handleJoinOpen = async () => {

        if (participatedModeullakState.modeullakId !== null) {
            return;
        }

        if (modeullakCode === "") {
            setIsAlertOpen(true);
            setAlertMessage("모들락 코드를 입력해주세요.");
            return;
        }

        const response = await checkModeullakCode(modeullakCode);

        if (response.success === false) {
            setIsAlertOpen(true);
            setAlertMessage("모들락 코드를 입력해주세요.");
            return;
        }

        if (modeullakCode !== "") {
            setModalType("join")
            setIsOpen(true);
        }
    }

    return (
        <Styled.Container>
            <Styled.Input>
                <Input placeholder={placeHolderMessage} width={"600px"} borderRadius={"30px"}
                       onChange={handleInputChange} disabled={isInputDisabled}/>
                <SizedBox width={"600px"} height={"8px"}/>
                <Styled.Label>
                    <SizedBox width={"30px"} height={"20px"}/>
                    <Sub1 color={theme.colorSystem.neutral["400"]} text={"개설된 모들락이 없나요?"}/>
                    <SizedBox width={"20px"} height={"20px"}/>
                    <Styled.RoomMaker onClick={handleCreateOpen}
                                      isParticipated={participatedModeullakState.modeullakId !== null}>
                        <Sub1
                            color={participatedModeullakState.modeullakId !== null ? theme.colorSystem.neutral[400] : theme.colorSystem.neutral["700"]}
                            text={"개설하기"}/>
                    </Styled.RoomMaker>
                    <SizedBox width={"30px"} height={"20px"}/>
                </Styled.Label>
            </Styled.Input>

            <SizedBox width={"80px"} height={"88px"}/>
            <Button onClick={handleJoinOpen} isParticipated={participatedModeullakState.modeullakId !== null}/>
            {
                isOpen && !participatedModeullakState.modeullakId !== null &&
                <Modal onClose={handleClose} type={modalType} modeullakCode={modeullakCode}/>
            }

            {
                isAlertOpen && <Alert title={alertMessage} onClick={handleAlertClose}/>
            }
        </Styled.Container>
    );
}