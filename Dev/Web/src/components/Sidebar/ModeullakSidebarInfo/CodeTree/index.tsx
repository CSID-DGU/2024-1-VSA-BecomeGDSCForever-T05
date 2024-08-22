import React, {useState} from "react";
import styled from "styled-components";
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

const TreeContainer = styled.ul<{ level: number }>`
    padding-left: ${(props) => props.level * 10}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const TreeItem = styled.li<{ isDirectory: boolean }>`
    list-style-type: ${(props) => (props.isDirectory ? "disc" : "none")};
    cursor: pointer;
    font-weight: ${(props) => (props.isDirectory ? "bold" : "normal")};
    padding-left: ${(props) => (props.isDirectory ? "0" : "20px")};
    display: contents;
`;

const Input = styled.input`
    margin: 5px 0;
    padding: 5px;
    font-size: 0.875rem;
`;

const Button = styled.button`
    margin-left: 5px;
    padding: 5px 10px;
    font-size: 0.75rem;
    cursor: pointer;
`;

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
        <TreeContainer level={level}>
            {structure.map((item, index) => (
                <TreeItem key={index} isDirectory={item.type === "DIRECTORY"}>
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
                        <span onClick={() => onFileClick(item.name)}>
                             ㅤ {item.name}
                        </span>
                    )}
                </TreeItem>
            ))}
        </TreeContainer>
    );
};

export default FileTree;