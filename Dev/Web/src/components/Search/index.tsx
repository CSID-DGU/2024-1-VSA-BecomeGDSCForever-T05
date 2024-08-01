import * as Styled from "./style.ts";
import Input from "@/components/Search/Input";
import SizedBox from "@/components/Common/SizedBox";
import Sub1 from "@/components/Common/Font/Body/Sub1";
import theme from "@/shared/theme.ts";
import Button from "@/components/Search/Button";


export default function Search() {
    return (
        <Styled.Container>
            <Styled.Input>
                <Input placeholder={"모들락을 검색해주세요."} width={"600px"} borderRadius={"30px"}/>
                <SizedBox width= {"600px"} height={"8px"}/>
                <Styled.Label>
                    <SizedBox width={"30px"} height={"20px"}/>
                    <Sub1 color={theme.colorSystem.neutral["400"]} text={"개설된 모들락이 없나요?"}/>
                    <SizedBox width={"20px"} height={"20px"}/>
                    <Styled.RoomMaker>
                        <Sub1 color={theme.colorSystem.neutral["700"]} text={"개설하기"}/>
                    </Styled.RoomMaker>
                    <SizedBox width={"30px"} height={"20px"}/>
                </Styled.Label>
            </Styled.Input>
            <SizedBox width={"80px"} height={"88px"}/>
            <Button />
        </Styled.Container>
    );
}