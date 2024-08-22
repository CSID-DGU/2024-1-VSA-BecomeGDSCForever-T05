import * as Styled from "./style.ts"
import {SvgButton} from "./style.ts"
import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import CloseButton from "@/assets/icons/CloseButton.svg";
import SizedBox from "@/components/Common/SizedBox";
import theme from "@/shared/theme.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import Sub1 from "@/components/Common/Font/Body/Sub1";
import {useState} from "react";
import UpChevron from "@/assets/icons/UpChevron.svg";
import DownChevron from "@/assets/icons/DownChevron.svg";
import H0 from "@/components/Common/Font/Heading/H0";
import {updateKeywordModal} from "@/stores/slices/modal/keywordModal.slice.ts";
import {useDialogueKeywordBrief} from "@/hooks/dialogue/useDialogueKeywordBrief.ts";
import {useDialogueDetail} from "@/hooks/dialogue/useDialogueDetail.ts";
import BriefQuestion from "@/components/ModeullakDetail/KeywordModal/BriefQuestion";
import BriefAnswer from "@/components/ModeullakDetail/KeywordModal/BriefAnswer";
import KeywordOwner from "@/components/ModeullakDetail/KeywordModal/CoreKeyword/KeywordOwner";

export default function CoreKeyword() {

    const dispatch = useDispatch<AppDispatch>();
    const keywordModalState = useSelector((state: RootState) => state.keywordModalState);

    const modeullakKeywordState = useSelector((state: RootState) => state.modeullakKeywordState);
    const dialogueKeywordBriefState = useDialogueKeywordBrief(keywordModalState.modeullakId!, modeullakKeywordState.keywords.find((keyword) => keyword.name === keywordModalState.keyword)!.id);
    const [ownerId, setOwnerId] = useState(modeullakKeywordState.keywords.find((keyword) => keyword.name === keywordModalState.keyword)!.representativeDialogueId);
    const dialogueDetailState = useDialogueDetail(ownerId);
 
    const [isBrief, setIsBrief] = useState(true);

    const handleClose = () => {
        dispatch(updateKeywordModal({
            isOpen: false,
            type: "none",
            keyword: "",
            dialogueId: -1
        }))
    }

    const handleToggle = () => {
        setIsBrief(!isBrief);
    }

    const handleKeywordOwner = (dialogueId: number) => {
        setOwnerId(dialogueId);
    }

    return (
        <Styled.Container>
            <Row>
                <Spacer flex={1} direction={"horizontal"}/>
                <Styled.SvgButton src={CloseButton} width={"24px"} height={"24px"}
                                  onClick={handleClose}
                />
            </Row>
            <Row alignItems={"center"}>
                <H0 color={theme.colorSystem.black} textAlign={"left"} text={keywordModalState.keyword}/>
                <Spacer flex={1} direction={"horizontal"}/>
                <div onClick={handleToggle} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                    <Sub1 color={theme.colorSystem.neutral["500"]} textAlign={"right"}
                          text={isBrief ? "전체 보기" : "간략히 보기"}/>
                    <SizedBox width={"8px"}/>
                    <SvgButton src={isBrief ? DownChevron : UpChevron} width={"16px"} height={"16px"}
                               style={{marginBottom: "0px"}}/>
                </div>
            </Row>
            <SizedBox height={"20px"}/>
            {

                !isBrief && <Styled.GridWrapper>
                    <Styled.GridView>
                        {
                            dialogueKeywordBriefState.dialogues.map((dialogue) => {
                                return <KeywordOwner isClicked={dialogue.id === ownerId} dialogue={dialogue}
                                                     onClick={() => handleKeywordOwner(dialogue.id)}/>
                            })
                        }
                    </Styled.GridView>
                    <SizedBox height={"20px"}/>
                </Styled.GridWrapper>
            }
            <Styled.Wrapper>
                <div>
                    <BriefQuestion questionContent={dialogueDetailState.questionContent}
                                   questionShortCode={dialogueDetailState.questionShortCode}
                                   questionLongCode={dialogueDetailState.questionLongCode}/>
                    <SizedBox height={"20px"}/>
                    {
                        dialogueDetailState.answer && <BriefAnswer answer={dialogueDetailState.answer}
                                                                   isAnsweredByLlm={dialogueDetailState.isAnsweredLlm!}/>
                    }
                </div>
            </Styled.Wrapper>
        </Styled.Container>
    );
}