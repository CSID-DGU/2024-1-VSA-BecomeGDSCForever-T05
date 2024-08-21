import * as Styled from './style';
import Row from "@/components/Common/Row";
import Spacer from "@/components/Common/Spacer";
import SizedBox from "@/components/Common/SizedBox";
import theme from "@/shared/theme.ts";
import {ModeullakOverviewState} from "@/interfaces/states/modeullak/ModeullakOverviewState.ts";
import ModeullakOverviewItemTitle
    from "@/components/ModeullakOverview/ModeullakOverviewItem/ModeullakOverviewItemTitle";
import ModeullakOverviewItemTime from "@/components/ModeullakOverview/ModeullakOverviewItem/ModeullakOverviewItemTime";
import ModeullakOverviewItemTag from "@/components/ModeullakOverview/ModeullakOverviewItem/ModeullakOverviewItemTag";
import ModeullakOverviewItemContent
    from "@/components/ModeullakOverview/ModeullakOverviewItem/ModeullakOverviewItemContent";
import {updateAnswerModalState} from "@/stores/slices/modal/answerModal.slice.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/stores/store.ts";

interface props {
    isFirst?: boolean;
    isLast?: boolean;
    modeullakOverview: ModeullakOverviewState;
}

export default function ModeullakOverviewItem(props: props) {

    const dispatch = useDispatch<AppDispatch>();

    const handleOnclick = () => {
        dispatch(updateAnswerModalState({
            isOpen: true,
            modeullakId: props.modeullakOverview.id
        }))
    }

    return (
        <Styled.Container onClick={handleOnclick}>
            {
                !props.isFirst && (
                    <>
                        <SizedBox height={"12px"}/>
                        <Styled.Line/>
                        <SizedBox height={"12px"}/>
                    </>
                )
            }
            <Row justifyContent={"center"}>
                <ModeullakOverviewItemTitle title={props.modeullakOverview.title}/>
                <Spacer flex={1} direction={"horizontal"}/>
                <ModeullakOverviewItemTime startedAt={props.modeullakOverview.startedAt}
                                           endedAt={props.modeullakOverview.endedAt}/>
            </Row>
            <SizedBox height={"8px"}/>
            <Row>
                {
                    props.modeullakOverview.tags.map((tag, index) => {

                        if (index == 0) {
                            return <ModeullakOverviewItemTag key={index} color={theme.colorSystem.secondary["200"]}
                                                             text={tag}/>
                        } else {
                            return (
                                <>
                                    <SizedBox width={"12px"}/>
                                    <ModeullakOverviewItemTag color={theme.colorSystem.secondary["200"]} text={tag}/>
                                </>
                            )
                        }
                    })
                }
            </Row>
            <SizedBox height={"8px"}/>
            <ModeullakOverviewItemContent
                text={props.modeullakOverview.content}/>
        </Styled.Container>
    );
}