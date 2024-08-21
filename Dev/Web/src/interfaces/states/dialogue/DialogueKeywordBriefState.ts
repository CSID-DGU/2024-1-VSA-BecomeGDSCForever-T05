export interface DialogueKeywordBriefState {
    id: number;
    userProfileImageUrl: string;
    userRandomNickname: string;
    isAnsweredLlm: boolean;
}

export interface DialogueKeywordBriefJson {
    id: number;
    user_profile_image_url: string;
    user_random_nickname: string;
    is_answered_llm: boolean;
}

export function copyWith(
    state: DialogueKeywordBriefState,
    overrides: Partial<DialogueKeywordBriefState>
): DialogueKeywordBriefState {
    return {
        id: overrides.id ?? state.id,
        userProfileImageUrl: overrides.userProfileImageUrl ?? state.userProfileImageUrl,
        userRandomNickname: overrides.userRandomNickname ?? state.userRandomNickname,
        isAnsweredLlm: overrides.isAnsweredLlm ?? state.isAnsweredLlm,
    }
}

export function fromJson(json: DialogueKeywordBriefJson): DialogueKeywordBriefState {
    return {
        id: json.id,
        userProfileImageUrl: json.user_profile_image_url,
        userRandomNickname: json.user_random_nickname,
        isAnsweredLlm: json.is_answered_llm,
    };
}