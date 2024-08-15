import * as Styled from "./style.ts"
import IDEMulti from "@/components/Sidebar/IDEMulti";
import IDEPersonal from "@/components/Sidebar/IDEPersonal";
import DefaultRoom from "@/components/Room/DefaultRoom";
import UserRoom from "@/components/Room/UserRoom";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";


export default function Code() {

    const RoomFrameState = useSelector((state: RootState) => state.roomFrameState.type);

    return (
        <Styled.Container>
            <IDEMulti/>
            <IDEPersonal/>
            {
                RoomFrameState === "default" ? <DefaultRoom/> : <UserRoom/>
            }
        </Styled.Container>
    );
}