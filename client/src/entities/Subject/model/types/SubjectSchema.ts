import { Subject } from './Subject';

export interface SubjectSchema {
    data?: Subject;
    isLoading: boolean;
    error?: string;
}
