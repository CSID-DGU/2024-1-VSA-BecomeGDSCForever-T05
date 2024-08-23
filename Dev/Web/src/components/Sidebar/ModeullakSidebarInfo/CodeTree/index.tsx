import React, {useState} from "react";
import * as Styled from "./style.ts"
import {ModeullakStorageBriefState} from "@/interfaces/states/storage/ModeullakStorageBriefState.ts";

interface FileItem {
    type: "FILE" | "DIRECTORY";
    name: string;
    children?: FileItem[];
}

interface FileTreeProps {
    structure: ModeullakStorageBriefState[];
    level?: number;
    onFileClick: (fileName: string) => void;
    onDirectoryClick: (directoryName: string) => void;
    onAddItem: (type: "FILE" | "DIRECTORY", name: string, parentDirectory?: string) => void;
}


const FileTree: React.FC<FileTreeProps> = ({
                                               structure,
                                               level = 0,
                                               onFileClick,
                                               onDirectoryClick,
                                               onAddItem,
                                           }) => {
    const [openDirectories, setOpenDirectories] = useState<{ [key: string]: boolean }>({});
    const [newItemName, setNewItemName] = useState<string>("");

    const handleDirectoryClick = (directoryName: string) => {
        setOpenDirectories((prevState) => ({
            ...prevState,
            [directoryName]: !prevState[directoryName],
        }));
        onDirectoryClick(directoryName); // 디렉토리 클릭 시 상위 컴포넌트에 알림
    };

    const handleAddItem = (type: "FILE" | "DIRECTORY", parentDirectory?: string) => {
        if (newItemName.trim() === "") return;

        // parentDirectory가 지정되지 않았거나, 디렉토리가 닫혀 있으면 루트에 추가
        if (!parentDirectory || !openDirectories[parentDirectory]) {
            parentDirectory = undefined;
        }

        onAddItem(type, newItemName, parentDirectory);
        setNewItemName(""); // 입력 필드 초기화
    };

    return (
        <Styled.TreeContainer level={level}>
            {structure.map((item, index) => (
                <Styled.TreeItem key={index} isDirectory={item.type === "DIRECTORY"}>
                    {item.type === "DIRECTORY" ? (
                        <>
                            <span onClick={() => handleDirectoryClick(item.name)}>
                                {openDirectories[item.name] ? "▿" : "▹"} {item.name}
                            </span>
                            {openDirectories[item.name] &&
                                <FileTree
                                    structure={item.children || []}
                                    level={level + 1}
                                    onFileClick={onFileClick}
                                    onDirectoryClick={onDirectoryClick}
                                    onAddItem={onAddItem}
                                />
                            }
                        </>
                    ) : (
                        // <Sub2 text={item.name} onClick={() => onFileClick(item.name)} />
                        <span onClick={() => onFileClick(item.name)} style={{fontSize: "18px"}}>
                             ㅤ {item.name}
                        </span>
                    )}
                </Styled.TreeItem>
            ))}
        </Styled.TreeContainer>
    );
};

export default FileTree;