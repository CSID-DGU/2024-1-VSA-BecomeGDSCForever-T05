import * as Styled from "./style.ts";
import SizedBox from "@/components/Common/SizedBox";
import Logo from "@/components/Entry/SvgItem/Logo";
import Title from "@/components/Entry/SvgItem/Title";
import SubTitle from "@/components/Entry/SvgItem/SubTitle";

export default function LoginSvg() {
    return (
        <Styled.Container>
            <SizedBox height={"328px"}/>
            <Styled.Logo>
                <Logo width={"321.025.px"} height={"304.001px"}/>
            </Styled.Logo>
            <SizedBox height={"30.17px"}/>
            <Styled.Title>
                <Title width={"681.376px"} height={"54.39px"}/>
            </Styled.Title>
            <SizedBox height={"32.37px"}/>
            <Styled.SubTitle>
                <SubTitle/>
            </Styled.SubTitle>
        </Styled.Container>
    )
}