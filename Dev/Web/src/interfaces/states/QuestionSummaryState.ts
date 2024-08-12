export interface QuestionSummaryState {
    id: number;
    title: string;
    content: string;
    startedAt: string;
    endedAt: string;
    isAdmin: boolean;
    tags: string[];
}