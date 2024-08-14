export interface UserQuestionChunkState {
    id: number;
    keyword: string;
    question: string;
    answerBy: "AI 답변" | "조교 답변";
}