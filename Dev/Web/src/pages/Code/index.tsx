import * as Styled from "./style.ts"
import IDEMulti from "@/components/Sidebar/IDEMulti";
import IDEPersonal from "@/components/Sidebar/IDEPersonal";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";
import {useParams} from "react-router-dom";
import CodeIde from "@/components/Ide/CodeIde";


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
                // RoomFrameState === "default" ? <DefaultRoom modeullakId={parseInt(modeullakId)}/> :
                //     <UserRoom modeullakId={parseInt(modeullakId)}/>

                // RoomFrameState === "default" ? <DefaultRoom/> : <UserRoom/>

            }
            <CodeIde/>
        </Styled.Container>
    );
}