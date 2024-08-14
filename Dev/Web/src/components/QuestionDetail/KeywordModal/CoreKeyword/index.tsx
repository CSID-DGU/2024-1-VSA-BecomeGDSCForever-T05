import * as Styled from "./style.ts"
import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import CloseButton from "@/assets/icons/CloseButton.svg";
import SizedBox from "@/components/Common/SizedBox";
import theme from "@/shared/theme.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import {updateKeywordModalState, updateKeywordModalType} from "@/stores/slices/keywordModal.slice.ts";

import BriefQuestion from "@/components/QuestionDetail/BriefQuestion";
import Sub1 from "@/components/Common/Font/Body/Sub1";
import {useState} from "react";
import {SvgButton} from "./style.ts";

import UpChevron from "@/assets/icons/UpChevron.svg";
import DownChevron from "@/assets/icons/DownChevron.svg";
import H0 from "@/components/Common/Font/Heading/H0";
import BriefAnswer from "@/components/QuestionDetail/BriefAnswer";
import KeywordOwner from "@/components/QuestionDetail/KeywordModal/KeywordOwner";

export default function CoreKeyword() {

    const questionKeywordChunk = useSelector((state: RootState) => state.questionKeywordChunkState);

    const dispatch = useDispatch<AppDispatch>();
    const [isBrief, setIsBrief] = useState(true);

    const handleClose = () => {
        dispatch(updateKeywordModalState(false));
        dispatch(updateKeywordModalType("none"));
    }

    const handleToggle = () => {
        setIsBrief(!isBrief);
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
            <Row alignItems={"center"}>
                <H0 color={theme.colorSystem.black} textAlign={"left"} text={"핵심 키워드"}/>
                <Spacer flex={1} direction={"horizontal"}/>
                <div onClick={handleToggle} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                    <Sub1 color={theme.colorSystem.neutral["500"]} textAlign={"right"}
                          text={isBrief ? "전체 보기" : "간략히 보기"}/>
                    <SizedBox width={"8px"}/>
                    <SvgButton src={isBrief ? DownChevron : UpChevron} width={"16px"} height={"16px"}/>
                </div>
            </Row>
            <SizedBox height={"20px"}/>
            {

                !isBrief && <Styled.GridView>
                    {
                        questionKeywordChunk.map((keyword, index) => {
                            return <KeywordOwner isClicked={true}/>
                        })
                    }
                </Styled.GridView>

            }
            <SizedBox height={"20px"}/>
            <Styled.Wrapper>
                <div>
                    <BriefQuestion/>
                    <SizedBox height={"20px"}/>
                    <BriefAnswer/>
                </div>
            </Styled.Wrapper>
        </Styled.Container>
    );
}