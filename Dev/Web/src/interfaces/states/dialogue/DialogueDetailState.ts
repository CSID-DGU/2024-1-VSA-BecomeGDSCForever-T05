export interface DialogueDetailState {
    id: number;
    questionShortCode: string;
    questionLongCode: string;
    questionContent: string;
    askedAt: string;
    answer?: string;
    answeredAt?: string;
    isAnsweredLlm?: boolean;
}

export interface DialogueDetailJson {
    id: number;
    question_short_code: string;
    question_long_code: string;
    question_content: string;
    asked_at: string;
    answer?: string;
    replied_at?: string;
    is_answered_llm?: boolean;
}

export function copyWith(
    state: DialogueDetailState,
    override: Partial<DialogueDetailState>
): DialogueDetailState {
    return {
        id: override.id ?? state.id,
        questionShortCode: override.questionShortCode ?? state.questionShortCode,
        questionLongCode: override.questionLongCode ?? state.questionLongCode,
        questionContent: override.questionContent ?? state.questionContent,
        askedAt: override.askedAt ?? state.askedAt,
        answer: override.answer ?? state.answer,
        answeredAt: override.answeredAt ?? state.answeredAt,
        isAnsweredLlm: override.isAnsweredLlm ?? state.isAnsweredLlm
    }
}

export function fromJson(json: DialogueDetailJson): DialogueDetailState {
    return {
        id: json.id,
        questionShortCode: json.question_short_code,
        questionLongCode: json.question_long_code,
        questionContent: json.question_content,
        askedAt: json.asked_at,
        answer: json.answer,
        answeredAt: json.replied_at,
        isAnsweredLlm: json.is_answered_llm
    }
}