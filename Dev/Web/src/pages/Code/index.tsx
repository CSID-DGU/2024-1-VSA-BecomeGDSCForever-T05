import * as Styled from "./style.ts"
import ModeullakSidebarUser from "@/components/Sidebar/ModeullakSidebarUser";
import ModeullakSidebarInfo from "@/components/Sidebar/ModeullakSidebarInfo";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import {useParams} from "react-router-dom";
import DefaultRoom from "@/components/Room/DefaultRoom";
import UserRoom from "@/components/Room/UserRoom";
import HostRoom from "@/components/Room/HostRoom";
import CodeRoom from "@/components/Room/CodeRoom";


export default function Code() {

    /* --------------------------------------------------------------------------- */
    /* Modeullak State ----------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const modeullakId = useParams().id;
    const RoomFrameState = useSelector((state: RootState) => state.roomFrameState.type);

    return (
        <Styled.Container>
            <ModeullakSidebarUser modeullakId={parseInt(modeullakId)}/>
            <ModeullakSidebarInfo modeullakId={parseInt(modeullakId)}/>
            {
                RoomFrameState === "default"
                    ? <DefaultRoom modeullakId={parseInt(modeullakId)}/>
                    : RoomFrameState === "user"
                        ? <UserRoom modeullakId={parseInt(modeullakId)}/>
                        : RoomFrameState === "host"
                            ? <HostRoom modeullakId={parseInt(modeullakId)}/> :
                            <CodeRoom modeullakId={parseInt(modeullakId)}/>
            }
        </Styled.Container>
    );
}