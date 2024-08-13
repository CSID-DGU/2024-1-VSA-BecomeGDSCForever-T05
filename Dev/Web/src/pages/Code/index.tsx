import * as Styled from "./style.ts"
import IDEMulti from "@/components/Sidebar/IDEMulti";
import IDEPersonal from "@/components/Sidebar/IDEPersonal";


export default function Code() {
    return (
        <Styled.Container>
            <IDEMulti/>
            <IDEPersonal/>
        </Styled.Container>
    );
}