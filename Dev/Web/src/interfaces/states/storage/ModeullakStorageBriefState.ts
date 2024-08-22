export interface ModeullakStorageBriefState {
    id: string;
    type: "FILE" | "DIRECTORY";
    name: string;
    children?: ModeullakStorageBriefState[];
}

export interface ModeullakStorageBriefJson {
    id: string;
    type: "FILE" | "DIRECTORY";
    name: string;
    children?: ModeullakStorageBriefJson[];
}

export function copyWith(
    state: ModeullakStorageBriefState,
    override: Partial<ModeullakStorageBriefState>
): ModeullakStorageBriefState {
    return {
        ...state,
        ...override
    };
}

export function fromJson(json: ModeullakStorageBriefJson): ModeullakStorageBriefState {
    return {
        id: json.id,
        type: json.type,
        name: json.name,
        children: json.children?.map(fromJson)
    };
}