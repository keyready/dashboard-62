import { Folder } from './Folder';

export interface FolderSchema {
    data?: Folder;
    isLoading: boolean;
    error?: string;
}
