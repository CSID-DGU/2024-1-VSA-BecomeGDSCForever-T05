export interface ModeullakDetailState {
    id: number;
    title: string;
    content: string;
    tags: string[];
    startedAt: string;
    endedAt: string;
}

export interface ModeullakDetailJson {
    id: number;
    title: string;
    content: string;
    tags: string[];
    started_at: string;
    ended_at: string;
}

export function copyWith(
    state: ModeullakDetailState,
    overrides: Partial<ModeullakDetailState>
): ModeullakDetailState {
    return {
        id: overrides.id ?? state.id,
        title: overrides.title ?? state.title,
        content: overrides.content ?? state.content,
        tags: overrides.tags ?? state.tags,
        startedAt: overrides.startedAt ?? state.startedAt,
        endedAt: overrides.endedAt ?? state.endedAt,
    }
}

export function fromJson(json: ModeullakDetailJson): ModeullakDetailState {
    return {
        id: json.id as number,
        title: json.title as string,
        content: json.content as string,
        tags: json.tags as string[],
        startedAt: json.started_at as string,
        endedAt: json.ended_at as string,
    }
}