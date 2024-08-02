import * as Styled from "./style.ts";
import SizedBox from "@/components/Common/SizedBox";
import Logo from "@/components/Entry/SvgItem/Logo";
import Title from "@/components/Entry/SvgItem/Title";
import Arrow from "@/components/Entry/SvgItem/Arrow";

interface SignUpProps {
    onClick: () => void;
}

export default function SignUpSvg({ onClick }: SignUpProps) {
    return (
        <Styled.Container>
            <SizedBox width={"760px"} height={"32px"}/>
            <Styled.Arrow>
                <Arrow onClick={onClick}/>
            </Styled.Arrow>
            <SizedBox width={"760px"} height={"330px"}/>
            <Styled.Logo>
                <Logo width={"240.91px"} height={"234.714px"}/>
            </Styled.Logo>
            <SizedBox width={"760px"} height={"23.29px"}/>
            <Styled.Title>
                <Title width={"526.079px"} height={"41.994px"}/>
            </Styled.Title>
        </Styled.Container>
    )
}