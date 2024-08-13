import * as Styled from './style';
import Row from '@/components/Common/Row';
import Column from "@/components/Common/Column";
import H3 from '@/components/Common/Font/Heading/H3';
import ProfileImage from "@/components/Common/ProfileImage";
import exitIcon from "@/assets/icons/Sidebar/exitIcon.svg";
import settingIcon from "@/assets/icons/Sidebar/settingIcon.svg";
import doubleLeftIcon from "@/assets/icons/Sidebar/doubleLeftIcon.svg";
import questionIcon from "@/assets/icons/Sidebar/questionIcon.svg";
import newFolderIcon from "@/assets/icons/Sidebar/newFolderIcon.svg";
import newFileIcon from "@/assets/icons/Sidebar/newFileIcon.svg";
import refreshIcon from "@/assets/icons/Sidebar/refreshIcon.svg";


export default function IDEPersonal() {
    return (
        <Styled.Container>
            <Styled.TopMenuBar>
                <ProfileImage src={exitIcon} width={"24px"} height={"24px"}/>
                <Row width={"auto"}>
                    <ProfileImage src={settingIcon} width={"24px"} height={"24px"}/>
                    <ProfileImage src={doubleLeftIcon} width={"24px"} height={"24px"}/>
                </Row>
            </Styled.TopMenuBar>
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
            <Styled.DirectoryList>
                Directory List init
            </Styled.DirectoryList>

        </Styled.Container>
    );
}