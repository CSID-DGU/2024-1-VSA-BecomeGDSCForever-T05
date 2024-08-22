import H4 from '@/components/Common/Font/Heading/H4/index.tsx'
import * as Styled from './style.ts'
import theme from "@/shared/theme.ts";

export default function QuestionSummaryEmpty() {

    return (
        <Styled.Container>
            <H4 color={theme.colorSystem.neutral["500"]} text={"아직 질문이 없습니다."}/>
        </Styled.Container>
    )
}