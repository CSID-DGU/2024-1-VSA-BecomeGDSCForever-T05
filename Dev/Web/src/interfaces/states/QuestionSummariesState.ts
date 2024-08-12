import {QuestionSummaryState} from "@/interfaces/states/QuestionSummaryState.ts";

export interface QuestionSummariesState {
    data: QuestionSummaryState[];
    loading: boolean;
    error: string | null;
}