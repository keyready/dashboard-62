export interface SubjectsEstimation {
    title: string;
    score: number;
}

export interface Candidate {
    id?: number;
    img?: string;
    email?: string;

    firstname?: string;
    middlename?: string;
    lastname?: string;

    hobby?: string;

    age?: number;
    HES?: string;
    speciality?: string;
    faculty?: string;
    department?: string;
    averageSubjectsScore?: number;

    subjectsEstimation?: SubjectsEstimation[];
}
