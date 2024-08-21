import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import * as Styled from "./style.ts";
import CloseButton from "@/assets/icons/CloseButton.svg";
import SizedBox from "@/components/Common/SizedBox";
import theme from "@/shared/theme.ts";
import BriefQuestion from "../BriefQuestion";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/stores/store.ts";
import BriefAnswer from "../BriefAnswer";
import H0 from "@/components/Common/Font/Heading/H0";
import {updateKeywordModal} from "@/stores/slices/keywordModal.slice.ts";
import {useDialogueDetail} from "@/hooks/dialogue/useDialogueDetail.ts";

export default function UserKeyword() {

    const dispatch = useDispatch<AppDispatch>();
    const keyword = useSelector((state: RootState) => state.keywordModalState.keyword);
    const dialogueId = useSelector((state: RootState) => state.keywordModalState.dialogueId);

    const dialogueDetailState = useDialogueDetail(dialogueId);

    const handleClose = () => {
        dispatch(updateKeywordModal({
            isOpen: false,
            type: "none",
            keyword: "",
            dialogueId: -1
        }))
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
            <H0 color={theme.colorSystem.black} textAlign={"left"} text={keyword}/>
            <SizedBox height={"20px"}/>
            <Styled.Wrapper>
                <div>
                    <BriefQuestion questionContent={dialogueDetailState.questionContent}
                                   questionLongCode={dialogueDetailState.questionLongCode}
                                   questionShortCode={dialogueDetailState.questionShortCode}/>
                    <SizedBox height={"20px"}/>
                    {
                        dialogueDetailState.answer && <BriefAnswer answer={dialogueDetailState.answer}
                                                                   isAnsweredByLlm={dialogueDetailState.isAnsweredLlm!}/>
                    }
                </div>
            </Styled.Wrapper>
        </Styled.Container>
    )
}