import * as Styled from "./style.ts";

interface SignUpProps {
    onClick: () => void;
}

export default function SignUpSvg({onClick}: SignUpProps) {
    return (
        <Styled.Container>
            <SizedBox width={"760px"} height={"32px"}/>
            <Styled.Arrow>
                <Arrow onClick={onClick}/>
            </Styled.Arrow>
            <SizedBox width={"760px"} height={"200px"}/>
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