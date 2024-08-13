import * as Styled from './style';
import {MiddleMenuBar} from './style';
import Row from '@/components/Common/Row';
import Column from "@/components/Common/Column";
import H3 from '@/components/Common/Font/Heading/H3';

export default function IDEPersonal() {
    return (
        <Styled.Container>
            <Styled.TopMenuBar>
                <div>exit</div>
                <Row width={"auto"}>
                    <div>setting</div>
                    <div>close</div>
                </Row>
            </Styled.TopMenuBar>
            <MiddleMenuBar>
                <Column>
                    <H3 text={"My Profile"} color={"white"} textAlign={"left"}/>
                    <H3 text={"My Profile"} color={"white"} textAlign={"left"}/>
                </Column>
                <div>Question Icon</div>
            </MiddleMenuBar>
            <Styled.BottomMenuBar>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
            </Styled.BottomMenuBar>
            <Styled.DirectoryList>
                Directory List init
            </Styled.DirectoryList>

        </Styled.Container>
    );
}