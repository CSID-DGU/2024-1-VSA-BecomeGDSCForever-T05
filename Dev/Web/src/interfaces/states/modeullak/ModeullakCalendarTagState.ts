export interface ModeullakCalendarTagState {
    date: string;
    tags: string[];
}

export interface ModeullakCalendarTagJson {
    date: string;
    tags: string[];
}

export function copyWith(
    state: ModeullakCalendarTagState,
    overrides: Partial<ModeullakCalendarTagState>
): ModeullakCalendarTagState {
    return {
        date: overrides.date ?? state.date,
        tags: overrides.tags ?? state.tags,
    }
}

export function fromJson(json: ModeullakCalendarTagJson): ModeullakCalendarTagState {
    return {
        date: json.date as string,
        tags: json.tags as string[],
    }
}