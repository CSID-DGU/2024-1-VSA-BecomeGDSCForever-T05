import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import * as Styled from "./style.ts";
import CloseButton from "@/assets/icons/CloseButton.svg";
import SizedBox from "@/components/Common/SizedBox";
import theme from "@/shared/theme.ts";
import BriefQuestion from "@/components/ModeullakDetail/BriefQuestion";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/stores/store.ts";
import {updateKeywordModalState, updateKeywordModalType} from "@/stores/slices/keywordModal.slice.ts";
import BriefAnswer from "@/components/ModeullakDetail/BriefAnswer";
import H0 from "@/components/Common/Font/Heading/H0";

export default function UserKeyword() {

    const dispatch = useDispatch<AppDispatch>();

    const handleClose = () => {
        dispatch(updateKeywordModalState(false));
        dispatch(updateKeywordModalType("none"));
    }

    return (
        <Styled.Container>
            <Row>
                <Spacer flex={1} direction={"horizontal"}/>
                <Styled.SvgButton src={CloseButton} width={"24px"} height={"24px"}
                                  onClick={handleClose}
                />
            </Row>
            <SizedBox height={"20px"}/>
            <H0 color={theme.colorSystem.black} textAlign={"left"} text={"핵심 키워드"}/>
            <SizedBox height={"20px"}/>
            <Styled.Wrapper>
                <div>
                    <BriefQuestion/>
                    <SizedBox height={"20px"}/>
                    <BriefAnswer/>
                </div>
            </Styled.Wrapper>
        </Styled.Container>
    )
}