import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import * as Styled from "./style.ts";
import CloseButton from "@/assets/icons/CloseButton.svg";
import SizedBox from "@/components/Common/SizedBox";
import H1 from "@/components/Common/Font/Heading/H1";
import theme from "@/shared/theme.ts";
import BriefQuestion from "@/components/Answer/BriefQuestion";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/stores/store.ts";
import {updateKeywordModalState, updateKeywordModalType} from "@/stores/slices/keywordModal.slice.ts";

export default function UserKeyword() {

    const dispatch = useDispatch<AppDispatch>();

    const handleClose = () => {
        dispatch(updateKeywordModalState(false));
        dispatch(updateKeywordModalType("none"));
    }

    const list = [1, 2];

    return (
        <Styled.Container>
            <Row>
                <Spacer flex={1} direction={"horizontal"}/>
                <Styled.SvgButton src={CloseButton} width={"24px"} height={"24px"}
                                  onClick={handleClose}
                />
            </Row>
            <SizedBox height={"20px"}/>
            <H1 color={theme.colorSystem.black} textAlign={"left"} text={"핵심 키워드"}/>
            <SizedBox height={"20px"}/>
            <Styled.Wrapper>
                {
                    list.map((item) => {
                        return (
                            <div>
                                <BriefQuestion isOdd={item % 2 === 0}/>
                                <SizedBox height={"20px"}/>
                            </div>
                        )
                    })
                }
            </Styled.Wrapper>
        </Styled.Container>
    )
}