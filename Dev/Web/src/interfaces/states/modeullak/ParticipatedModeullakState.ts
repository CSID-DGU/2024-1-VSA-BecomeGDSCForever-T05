export interface ParticipatedModeullakState {
    modeullakId: number | null;
    modeullakTitle: string | null;
}

export interface ParticipatedModeullakJson {
    modeullak_id: number;
    modeullak_title: string;
}

export function copyWith(
    state: ParticipatedModeullakState,
    overrides: Partial<ParticipatedModeullakState>
): ParticipatedModeullakState {
    return {
        modeullakId: overrides.modeullakId ?? state.modeullakId,
        modeullakTitle: overrides.modeullakTitle ?? state.modeullakTitle,
    }
}

export function fromJson(json: ParticipatedModeullakJson): ParticipatedModeullakState {
    return {
        modeullakId: json.modeullak_id as number,
        modeullakTitle: json.modeullak_title as string,
    }
}