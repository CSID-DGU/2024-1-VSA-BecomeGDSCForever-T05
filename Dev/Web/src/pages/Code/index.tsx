import * as Styled from "./style.ts"
import IDEMulti from "@/components/Sidebar/IDEMulti";
import IDEPersonal from "@/components/Sidebar/IDEPersonal";
import DefaultRoom from "@/components/Room/DefaultRoom";
import UserRoom from "@/components/Room/UserRoom";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import {useParams} from "react-router-dom";

export default function Code() {

    /* --------------------------------------------------------------------------- */
    /* Modeullak State ----------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const modeullakId = useParams().id;
    const RoomFrameState = useSelector((state: RootState) => state.roomFrameState.type);
    
    return (
        <Styled.Container>
            <IDEMulti/>
            <IDEPersonal/>
            {
                RoomFrameState === "default" ? <DefaultRoom modeullakId={parseInt(modeullakId)}/> : <UserRoom/>
            }
        </Styled.Container>
    );
}