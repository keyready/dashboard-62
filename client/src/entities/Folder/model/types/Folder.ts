import { Candidate } from 'entities/Candidate';

export interface Folder {
    id: number;
    title: string;
    groupingRule: string;
    participants?: Candidate[];
}
