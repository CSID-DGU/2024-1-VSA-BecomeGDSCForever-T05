export interface KeywordModalState {
    isOpen: boolean;
    type: "user" | "keyword" | "none";
    keyword: string;
    dialogueId: number;
    modeullakId?: number;
}