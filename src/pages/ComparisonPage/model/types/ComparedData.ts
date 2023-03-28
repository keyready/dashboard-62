export interface CandidatesScores {
    surname?: string;
    score?: number
}

export interface RadarInfo {
    subject?: string;
    candidatesScores: CandidatesScores[];
    fullMark?: number;
}

export interface BarsInfo {
    name?: string;
    score?: number;
}

export interface HobbyOverlap {
    surname?: string;
    score?: number;
}

export interface ComparedData {
    radarDiagram?: RadarInfo[];
    barsDiagram?: BarsInfo[];
    hobbyOverlap?: HobbyOverlap[];
}

export interface ComparedDataSchema {
    data?: ComparedData;
    comparingPurpose: string;
    error?: string;
    isLoading: boolean;
}
