export interface RadarInfo {
    subject?: string;
    candidate1?: string;
    candidate2?: string;
    candidate3?: string;
    candidate4?: string;
    fullMark?: number;
}

export interface BarsInfo {
    name?: string;
    score?: number;
}

export interface ComparedData {
    radarDiagram?: RadarInfo[];
    barsDiagram?: BarsInfo[];
}

export interface ComparedDataSchema {
    data?: ComparedData;
    error?: string;
    isLoading: boolean;
}
