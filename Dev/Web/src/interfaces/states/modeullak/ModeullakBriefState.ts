export interface ModeullakBriefState {
    id: number;
    title: string;
    tags: string[];
    remainedHour: number;
    remainedMinute: number;
}

export interface ModeullakBriefJson {
    id: number;
    title: string;
    tags: string[];
    remained_hour: number;
    remained_minute: number;
}

export function copyWith(
    state: ModeullakBriefState,
    overrides: Partial<ModeullakBriefState>
): ModeullakBriefState {
    return {
        id: overrides.id ?? state.id,
        title: overrides.title ?? state.title,
        tags: overrides.tags ?? state.tags,
        remainedHour: overrides.remainedHour ?? state.remainedHour,
        remainedMinute: overrides.remainedMinute ?? state.remainedMinute,
    }
}

export function fromJson(json: ModeullakBriefJson): ModeullakBriefState {
    return {
        id: json.id as number,
        title: json.title as string,
        tags: json.tags as string[],
        remainedHour: json.remained_hour as number,
        remainedMinute: json.remained_minute as number,
    }
}