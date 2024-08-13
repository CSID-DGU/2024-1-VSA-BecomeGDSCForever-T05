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

export default function IDEPersonal() {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
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
                            <H3 text={"My Profile"} color={"white"} textAlign={"left"}/>
                            <H3 text={"My Profile"} color={"white"} textAlign={"left"}/>
                        </Column>
                        <ProfileImage src={questionIcon} width={"48px"} height={"48px"}/>
                    </Styled.MiddleMenuBar>
                    <Styled.BottomMenuBar>
                        <ProfileImage src={newFileIcon} width={"24px"} height={"24px"}/>
                        <ProfileImage src={newFolderIcon} width={"24px"} height={"24px"}/>
                        <ProfileImage src={refreshIcon} width={"24px"} height={"24px"}/>
                    </Styled.BottomMenuBar>
                </>
            )}
            <Styled.DirectoryList isCollapsed={isCollapsed}>
                {!isCollapsed && 'Directory List init'}
            </Styled.DirectoryList>
        </Styled.Container>
    );
}