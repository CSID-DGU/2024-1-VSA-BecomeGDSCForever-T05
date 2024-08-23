import {useEffect, useState} from 'react';
import * as Styled from './style';
import Column from "@/components/Common/Column";
import H3 from '@/components/Common/Font/Heading/H3';
import ProfileImage from "@/components/Common/ProfileImage";
import SizedBox from "@/components/Common/SizedBox";
import exitIcon from "@/assets/icons/Sidebar/exitIcon.svg";
import settingIcon from "@/assets/icons/Sidebar/settingIcon.svg";
import questionIcon from "@/assets/icons/Sidebar/questionIcon.svg";
import doubleLeftIcon from "@/assets/icons/Sidebar/doubleLeftIcon.svg";
import doubleRightIcon from "@/assets/icons/Sidebar/doubleRightIcon.svg";
import newFileIcon from "@/assets/icons/Sidebar/newFileIcon.svg";
import refreshIcon from "@/assets/icons/Sidebar/refreshIcon.svg";
import Sub2 from "@/components/Common/Font/Body/Sub2";
import Row from "@/components/Common/Row";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {updateRoomFrameState} from "@/stores/slices/global/roomFrame.slice.ts";
import {createModeullakStorage, fetchModeullakStorageBrief, fetchModeullakUserStorageBrief} from "@/apis/storage";
import {useNavigate} from "react-router-dom";
import {CONSTANT} from "@/constants/Constant.ts";
import {useModeullakUserBrief} from "@/hooks/modeullak/useModeullakUserBrief.ts";
import {useModeullakStorageBrief} from "@/hooks/storage/useModeullakStorageBrief.ts";
import {updateSelectedLanguage} from "@/stores/slices/global/selectedLanguage.slice.ts";
import {extensionUtil} from "@/utils/extensionUtil.ts";
import CodeTree from "@/components/Sidebar/ModeullakSidebarInfo/CodeTree";
import {addModeullakStorage, updateModeullakStorage} from "@/stores/slices/storage/modeullakStorageBrief.slice.ts";
import {ModeullakUserBriefState} from "@/interfaces/states/modeullak/ModeullakUserBriefState.ts";
import {updateSelectedStorageId} from "@/stores/slices/global/selectedStorageId.slice.ts";
import {fetchModeullakUser} from "@/apis/modeullak";
import theme from "@/shared/theme.ts";

interface props {
    modeullakId: number;
}

export default function ModeullakSidebarInfo(props: props) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [newItemName, setNewItemName] = useState<string>("");
    const [isAddingFile, setIsAddingFile] = useState<boolean>(false);
    const [selectedDirectory, setSelectedDirectory] = useState<string | null>(null);

    const dispatch = useDispatch<AppDispatch>();
    const isHost = useSelector((state: RootState) => state.hostState.isHost);

    const selectedUser = useSelector((state: RootState) => state.selectedUserState);

    const modeullakUserBrief = useModeullakUserBrief(props.modeullakId);

    const [spaceUser, setSpaceUser] = useState<ModeullakUserBriefState>(modeullakUserBrief.selfUser);

    const modeullakStorageUserBrief = useModeullakStorageBrief(props.modeullakId);

    const navigate = useNavigate();

    const loadUserStorageBrief = async () => {
        try {
            const response = await fetchModeullakUserStorageBrief(props.modeullakId, selectedUser.id);

            if (response.success) {
                dispatch(updateModeullakStorage(response.data.storages));
            }
        } catch (error) {
            console.error("Error fetching user storage brief:", error);
        }
    }

    const loadModeullakUser = async () => {
        try {
            const response = await fetchModeullakUser(props.modeullakId);

            if (response.success) {
                setSpaceUser(response.data.self_user);
            }
        } catch (error) {
            console.error("Error fetching modeullak user:", error);
        }
    }

    useEffect(() => {
        loadModeullakUser().then(r => r);
    }, []);

    useEffect(() => {
        loadUserStorageBrief().then(r => r);
        setSpaceUser(selectedUser);
    }, [selectedUser.id]);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleQuestionButtonClick = () => {
        dispatch(updateRoomFrameState("user"));
    };

    const handleSettingButtonClick = () => {
        dispatch(updateRoomFrameState("default"));
    }

    interface FileItem {
        type: "FILE" | "DIRECTORY";
        name: string;
        children?: FileItem[];
    }

    const [fileStructure, setFileStructure] = useState<FileItem[]>([]);

    const handleFileClick = (fileName: string) => {

        const fileId = modeullakStorageUserBrief.storages.find(storage => storage.name === fileName)?.id;

        dispatch(updateSelectedLanguage(extensionUtil(fileName)));
        dispatch(updateSelectedStorageId(fileId));
        dispatch(updateRoomFrameState("ide"));
    };

    const handleDirectoryClick = (directoryName: string) => {
        setSelectedDirectory(directoryName); // 디렉토리 선택 시 상태 업데이트
    };

    const addItem = async (type: "FILE" | "DIRECTORY", name: string, parentDirectory: string | null = null) => {
        try {
            // 서버에 새 파일이나 디렉토리 생성 요청
            const response = await createModeullakStorage({
                modeullakId: props.modeullakId,
                parentStorageId: parentDirectory || null, // 루트 디렉토리에 생성하려면 "root"를 전달
                type: type, // 서버에서 예상하는 형식에 맞게 변환
                name: name,
            });

            console.log(response);

            dispatch(addModeullakStorage({
                type: "FILE",
                name: name,
            }));

            const newItem = {
                type,
                name,
                children: type === "DIRECTORY" ? [] : undefined,
            };

            const newStructure = [...fileStructure];

            const findDirectoryAndAddItem = (directory: FileItem): boolean => {
                if (directory.name === parentDirectory) {
                    directory.children?.push(newItem);
                    return true;
                } else if (directory.children && directory.children.length > 0) {
                    for (let i = 0; i < directory.children.length; i++) {
                        if (directory.children[i].type === "DIRECTORY") {
                            if (findDirectoryAndAddItem(directory.children[i])) return true;
                        }
                    }
                }
                return false;
            };

            if (parentDirectory) {
                for (let i = 0; i < newStructure.length; i++) {
                    if (newStructure[i].type === "DIRECTORY") {
                        if (findDirectoryAndAddItem(newStructure[i])) break;
                    }
                }
            } else {
                newStructure.push(newItem);
            }

            setFileStructure(newStructure);
        } catch (error) {
            console.error("Error creating item:", error);
            // 에러 처리 로직 추가 가능 (ex: 사용자에게 에러 메시지 표시)
        }
    };

    const handleNewFileClick = () => {

        if (selectedUser.id === modeullakUserBrief.selfUser.id) {
            setIsAddingFile(!isAddingFile);
        }
    };

    const handleAddNewItem = async () => {
        if (newItemName.trim() === "") return;

        if (isAddingFile) {
            await addItem("FILE", newItemName, selectedDirectory); // 선택된 디렉토리 또는 루트에 파일 추가
        }

        setNewItemName("");
        setIsAddingFile(false);
    };

    const handleExitModeullakClick = () => {
        navigate(CONSTANT.ROUTER.HOME);
        window.location.reload();
    }

    const handleRefreshClick = () => {
        dispatch(fetchModeullakStorageBrief(props.modeullakId));
    }

    return (
        <Styled.Container isCollapsed={isCollapsed}>
            <Styled.TopMenuBar isCollapsed={isCollapsed}>
                {isCollapsed ? (
                    <Column alignItems={"center"} justifyContent={"space-between"}>
                        <ProfileImage
                            src={doubleRightIcon}
                            width={"24px"}
                            height={"24px"}
                            onClick={toggleSidebar}
                        />
                        <SizedBox height={"8px"}/>
                        <ProfileImage src={settingIcon} width={"24px"} height={"24px"}
                                      onClick={handleSettingButtonClick}/>
                        <SizedBox height={"8px"}/>
                        <ProfileImage src={exitIcon} width={"24px"} height={"24px"} onClick={handleExitModeullakClick}/>
                    </Column>
                ) : (
                    <>
                        <ProfileImage src={exitIcon} width={"24px"} height={"24px"} onClick={handleExitModeullakClick}/>
                        <Row width={"auto"}>
                            <ProfileImage src={settingIcon} width={"24px"} height={"24px"}
                                          onClick={handleSettingButtonClick}/>
                            <ProfileImage
                                src={doubleLeftIcon}
                                width={"24px"}
                                height={"24px"}
                                onClick={toggleSidebar}
                            />
                        </Row>
                    </>
                )}
            </Styled.TopMenuBar>
            {!isCollapsed && (
                <>
                    <Styled.MiddleMenuBar>
                        <Column>
                            <H3 text={`${spaceUser.nickname}님의`} color={"white"} textAlign={"left"}/>
                            <H3 text={"개인공간"} color={"white"} textAlign={"left"}/>
                        </Column>
                        {
                            !isHost && (
                                <ProfileImage src={questionIcon} width={"48px"} height={"48px"}
                                              onClick={handleQuestionButtonClick}/>
                            )
                        }
                    </Styled.MiddleMenuBar>
                    <Styled.BottomMenuBar>
                        {(isAddingFile) && (
                            <Row gap={"5px"}>
                                {/* 이거 스타일로 바꾸고*/}
                                <Styled.AddFileInput
                                    type="text"
                                    value={newItemName}
                                    onChange={(e) => setNewItemName(e.target.value)}
                                    placeholder={isAddingFile ? "Enter file name" : "Enter directory name"}
                                />
                                {/* 여기도 스타일로 바꾸면 될듯?*/}
                                <Styled.AddFileButton onClick={handleAddNewItem}>
                                    <Sub2 text={"추가"} color={theme.colorSystem.neutral["800"]}/>
                                </Styled.AddFileButton>
                            </Row>
                        )}
                        {
                            selectedUser.id === modeullakUserBrief.selfUser.id && (
                                <ProfileImage src={newFileIcon} width={"16px"} height={"16px"}
                                              onClick={handleNewFileClick}/>
                            )
                        }
                        <ProfileImage src={refreshIcon} width={"16px"} height={"16px"} onClick={handleRefreshClick}/>
                    </Styled.BottomMenuBar>

                </>
            )}
            <Styled.DirectoryList isCollapsed={isCollapsed}>
                {!isCollapsed && (
                    <CodeTree
                        structure={modeullakStorageUserBrief.storages}
                        onFileClick={handleFileClick}
                        onDirectoryClick={handleDirectoryClick}
                        onAddItem={addItem}
                    />
                )}
            </Styled.DirectoryList>
        </Styled.Container>
    );
}