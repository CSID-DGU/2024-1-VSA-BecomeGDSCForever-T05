export interface ModeullakKeywordState {
    id: number;
    name: string;
    description: string;
    similarQuestionCount: number;
    representativeDialogueId: number;
}

export interface ModeullakKeywordJson {
    id: number;
    name: string;
    description: string;
    similar_question_count: number;
    representative_dialogue_id: number;
}

export function copyWith(
    state: ModeullakKeywordState,
    overrides: Partial<ModeullakKeywordState>
): ModeullakKeywordState {
    return {
        id: overrides.id ?? state.id,
        name: overrides.name ?? state.name,
        description: overrides.description ?? state.description,
        similarQuestionCount: overrides.similarQuestionCount ?? state.similarQuestionCount,
        representativeDialogueId: overrides.representativeDialogueId ?? state.representativeDialogueId,
    }
}

export function fromJson(json: ModeullakKeywordJson): ModeullakKeywordState {
    return {
        id: json.id,
        name: json.name,
        description: json.description,
        similarQuestionCount: json.similar_question_count,
        representativeDialogueId: json.representative_dialogue_id,
    };
}