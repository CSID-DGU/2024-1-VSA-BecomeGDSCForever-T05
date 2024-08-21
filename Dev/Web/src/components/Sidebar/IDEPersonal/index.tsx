import {useState} from 'react';
import * as Styled from './style';
import Column from "@/components/Common/Column";
import H3 from '@/components/Common/Font/Heading/H3';
import ProfileImage from "@/components/Common/ProfileImage";
import SizedBox from "@/components/Common/SizedBox";
import exitIcon from "@/assets/icons/Sidebar/exitIcon.svg";
import settingIcon from "@/assets/icons/Sidebar/settingIcon.svg";
import doubleLeftIcon from "@/assets/icons/Sidebar/doubleLeftIcon.svg";
import doubleRightIcon from "@/assets/icons/Sidebar/doubleRightIcon.svg";
import questionIcon from "@/assets/icons/Sidebar/questionIcon.svg";
import newFolderIcon from "@/assets/icons/Sidebar/newFolderIcon.svg";
import newFileIcon from "@/assets/icons/Sidebar/newFileIcon.svg";
import refreshIcon from "@/assets/icons/Sidebar/refreshIcon.svg";
import Row from "@/components/Common/Row";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {updateRoomFrameState} from "@/stores/slices/roomFrame.slice.ts";
import CodeTree from "@/components/Ide/CodeTree";

export default function IDEPersonal() {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [newItemName, setNewItemName] = useState<string>("");
    const [isAddingFile, setIsAddingFile] = useState<boolean>(false);
    const [isAddingDirectory, setIsAddingDirectory] = useState<boolean>(false);
    const [selectedDirectory, setSelectedDirectory] = useState<string | null>(null); // 선택된 디렉토리 상태

    const dispatch = useDispatch<AppDispatch>();
    const roomFrameState = useSelector((state: RootState) => state.roomFrameState);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleQuestionButtonClick = () => {
        roomFrameState.type === "user" ? dispatch(updateRoomFrameState("default")) : dispatch(updateRoomFrameState("user"));
    };

    interface FileItem {
        type: "FILE" | "DIRECTORY";
        name: string;
        children?: FileItem[];
    }

    const [fileStructure, setFileStructure] = useState<FileItem[]>([]);

    const handleFileClick = (fileName: string) => {
        console.log(`File clicked: ${fileName}`);
    };

    const handleDirectoryClick = (directoryName: string) => {
        setSelectedDirectory(directoryName); // 디렉토리 선택 시 상태 업데이트
    };

    const addItem = (type: "FILE" | "DIRECTORY", name: string, parentDirectory: string | null = null) => {
        const newStructure = [...fileStructure];

        const findDirectoryAndAddItem = (directory: FileItem): boolean => {
            if (directory.name === parentDirectory) {
                directory.children?.push({
                    type: type,
                    name: name,
                    children: type === "DIRECTORY" ? [] : undefined,
                });
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
            newStructure.push({
                type: type,
                name: name,
                children: type === "DIRECTORY" ? [] : undefined,
            });
        }

        setFileStructure(newStructure);
    };

    const handleNewFileClick = () => {
        setIsAddingFile(!isAddingFile);
        setIsAddingDirectory(false);
    };

    const handleNewDirectoryClick = () => {
        setIsAddingFile(false);
        setIsAddingDirectory(!isAddingDirectory);
    };

    const handleAddNewItem = () => {
        if (newItemName.trim() === "") return;

        if (isAddingFile) {
            addItem("FILE", newItemName, selectedDirectory); // 선택된 디렉토리 또는 루트에 파일 추가
        } else if (isAddingDirectory) {
            addItem("DIRECTORY", newItemName, selectedDirectory); // 선택된 디렉토리 또는 루트에 디렉토리 추가
        }

        setNewItemName("");
        setIsAddingFile(false);
        setIsAddingDirectory(false);
        setSelectedDirectory(null); // 추가 후 선택 해제
    };

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
                        <ProfileImage src={settingIcon} width={"24px"} height={"24px"}/>
                        <SizedBox height={"8px"}/>
                        <ProfileImage src={exitIcon} width={"24px"} height={"24px"}/>
                    </Column>
                ) : (
                    <>
                        <ProfileImage src={exitIcon} width={"24px"} height={"24px"}/>
                        <Row width={"auto"}>
                            <ProfileImage src={settingIcon} width={"24px"} height={"24px"}/>
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
                            <H3 text={"무능한 하마님의"} color={"white"} textAlign={"left"}/>
                            <H3 text={"개인공간"} color={"white"} textAlign={"left"}/>
                        </Column>
                        <ProfileImage src={questionIcon} width={"48px"} height={"48px"}
                                      onClick={handleQuestionButtonClick}/>
                    </Styled.MiddleMenuBar>
                    <Styled.BottomMenuBar>
                        <ProfileImage src={newFileIcon} width={"16px"} height={"16px"} onClick={handleNewFileClick}/>
                        <ProfileImage src={newFolderIcon} width={"14px"} height={"14px"}
                                      onClick={handleNewDirectoryClick}/>
                        <ProfileImage src={refreshIcon} width={"16px"} height={"16px"}/>
                    </Styled.BottomMenuBar>
                    {(isAddingFile || isAddingDirectory) && (
                        <Row>
                            <input
                                type="text"
                                value={newItemName}
                                onChange={(e) => setNewItemName(e.target.value)}
                                placeholder={isAddingFile ? "Enter file name" : "Enter directory name"}
                            />
                            <button onClick={handleAddNewItem}>Add</button>
                        </Row>
                    )}
                </>
            )}
            <Styled.DirectoryList isCollapsed={isCollapsed}>
                {!isCollapsed && (
                    <CodeTree
                        structure={fileStructure}
                        onFileClick={handleFileClick}
                        onDirectoryClick={handleDirectoryClick}
                        onAddItem={addItem}
                    />
                )}
            </Styled.DirectoryList>
        </Styled.Container>
    );
}