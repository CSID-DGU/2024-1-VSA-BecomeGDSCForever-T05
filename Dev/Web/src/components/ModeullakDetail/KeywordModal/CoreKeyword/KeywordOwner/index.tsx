import * as Styled from "./style.ts";
import SvgButton from "@/components/Common/SvgButton";
import DefaultProfile from "@/assets/icons/Profile/DefaultProfile.svg"
import H3 from "@/components/Common/Font/Heading/H3";
import theme from "@/shared/theme.ts";
import H6 from "@/components/Common/Font/Heading/H6";
import SizedBox from "@/components/Common/SizedBox";
import {DialogueKeywordBriefState} from "@/interfaces/states/dialogue/DialogueKeywordBriefState.ts";

interface props {
    isClicked: boolean;
    dialogue: DialogueKeywordBriefState;
    onClick: () => void;
}

export default function KeywordOwner(props: props) {

    return (
        <Styled.Container isClicked={props.isClicked} onClick={props.onClick}>
            <SvgButton src={DefaultProfile} width={"52px"} height={"52px"}/>
            <SizedBox width={"20px"}/>
            <div>
                <H3 text={props.dialogue.userRandomNickname} color={theme.colorSystem.black} textAlign={"start"}/>
                <SizedBox height={"8px"}/>
                <H6 text={props.dialogue.isAnsweredLlm ? "AI 답변" : "조교 답변"} color={theme.colorSystem.neutral["500"]}
                    textAlign={"start"}/>
            </div>
        </Styled.Container>
    )
}