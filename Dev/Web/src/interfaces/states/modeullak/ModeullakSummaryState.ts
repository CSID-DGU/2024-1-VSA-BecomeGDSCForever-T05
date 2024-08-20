export interface ModeullakSummaryState {
    id: number;
    title: string;
    tags: string[];
    participationCode: string;
    totalTime: string;
    remainedTime: string;
}

export interface ModeullakSummaryJson {
    id: number;
    title: string;
    tags: string[];
    participation_code: string;
    total_time: string;
    remained_time: string;
}

export function copyWith(
    state: ModeullakSummaryState,
    overrides: Partial<ModeullakSummaryState>
): ModeullakSummaryState {
    return {
        id: overrides.id ?? state.id,
        title: overrides.title ?? state.title,
        tags: overrides.tags ?? state.tags,
        participationCode: overrides.participationCode ?? state.participationCode,
        totalTime: overrides.totalTime ?? state.totalTime,
        remainedTime: overrides.remainedTime ?? state.remainedTime,
    }
}

export function fromJson(json: ModeullakSummaryJson): ModeullakSummaryState {
    return {
        id: json.id as number,
        title: json.title as string,
        tags: json.tags as string[],
        participationCode: json.participation_code as string,
        totalTime: json.total_time as string,
        remainedTime: json.remained_time as string,
    }
}
