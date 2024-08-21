export interface ModeullakUserDialogueSummaryState {
    id: number;
    keywordName: string;
    questionContent: string;
    isAnsweredByLlm: boolean;
}

export interface ModeullakUserDialogueSummaryJson {
    id: number;
    keyword_name: string;
    question_content: string;
    is_answered_by_llm: boolean;
}

export function copyWith(
    state: ModeullakUserDialogueSummaryState,
    overrides: Partial<ModeullakUserDialogueSummaryState>
): ModeullakUserDialogueSummaryState {
    return {
        id: overrides.id ?? state.id,
        keywordName: overrides.keywordName ?? state.keywordName,
        questionContent: overrides.questionContent ?? state.questionContent,
        isAnsweredByLlm: overrides.isAnsweredByLlm ?? state.isAnsweredByLlm,
    }
}

export function fromJson(json: ModeullakUserDialogueSummaryJson): ModeullakUserDialogueSummaryState {
    return {
        id: json.id,
        keywordName: json.keyword_name,
        questionContent: json.question_content,
        isAnsweredByLlm: json.is_answered_by_llm,
    };
}