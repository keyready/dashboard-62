export interface SkillsChildren {
    title?: string;
    score?: number;
}

export interface Skills {
    skillTitle?: string;
    averageScore?: number;
    children?: SkillsChildren[];
}

export interface Candidate {
    id?: number;
    email?: string;
    firstname?: string;
    middlename?: string;
    lastname?: string;
    age?: number;
    education?: string;
    speciality?: string;
    experience?: number;
    average_score?: number;
    skills?: Skills[];
    img?: string;
}
