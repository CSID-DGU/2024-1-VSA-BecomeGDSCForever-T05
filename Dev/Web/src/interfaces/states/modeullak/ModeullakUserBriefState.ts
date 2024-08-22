export interface ModeullakUserBriefState {
    id: string;
    nickname: string;
    profileImageUrl: string;
}

export interface ModeullakUserBriefJson {
    id: string;
    nickname: string;
    profile_image_url: string;
}

export function copyWith(
    state: ModeullakUserBriefState,
    override: Partial<ModeullakUserBriefState>
): ModeullakUserBriefState {
    return {
        id: override.id ?? state.id,
        nickname: override.nickname ?? state.nickname,
        profileImageUrl: override.profileImageUrl ?? state.profileImageUrl,
    }
}

export function fromJson(json: ModeullakUserBriefJson): ModeullakUserBriefState {
    return {
        id: json.id,
        nickname: json.nickname,
        profileImageUrl: json.profile_image_url,
    }
}
