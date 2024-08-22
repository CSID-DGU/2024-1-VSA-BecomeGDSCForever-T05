import * as Styled from "./style.ts"
import H3 from "@/components/Common/Font/Heading/H3";
import theme from "@/shared/theme.ts";
import {useNavigate} from "react-router-dom";
import {CONSTANT} from "@/constants/Constant.ts";

interface joinStateProps {
    text?: string;
    id?: number;
}

export default function JoinStateTag(props: joinStateProps) {

    /* --------------------------------------------------------------------------- */
    /* Window State -------------------------------------------------------------- */
    /* ----------------------------------------------------------------------------*/
    const navigate = useNavigate();

    /**
     * Click on Join State Tag
     */
    const handleOnClick = () => {
        if (props.id !== undefined && props.id !== null) {
            navigate(CONSTANT.ROUTER.CODE + `/${props.id}`);
        }
    }

    return (
        <Styled.Container onClick={handleOnClick}>
            <H3 text={props.text} color={theme.colorSystem.white}/>
        </Styled.Container>

    )

}