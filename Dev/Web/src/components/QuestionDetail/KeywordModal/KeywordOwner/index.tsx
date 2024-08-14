import * as Styled from "./style";
import SvgButton from "@/components/Common/SvgButton";
import DefaultProfile from "@/assets/icons/Profile/DefaultProfile.svg"
import H3 from "@/components/Common/Font/Heading/H3";
import theme from "@/shared/theme.ts";
import H6 from "@/components/Common/Font/Heading/H6";
import SizedBox from "@/components/Common/SizedBox";

interface props {
    isClicked: boolean;
}

export default function KeywordOwner(props: props) {

    const handleClick = () => {
        alert("click");
    }

    return (
        <Styled.Container isClicked={props.isClicked} onClick={handleClick}>
            <SvgButton src={DefaultProfile} width={"52px"} height={"52px"}/>
            <SizedBox width={"20px"}/>
            <div>
                <H3 text={"무능한 하마"} color={theme.colorSystem.black} textAlign={"start"}/>
                <SizedBox height={"8px"}/>
                <H6 text={"AI 답변"} color={theme.colorSystem.neutral["500"]} textAlign={"start"}/>
            </div>

        </Styled.Container>
    )
}