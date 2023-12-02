import { rtkApi } from 'shared/api/rtkApi';
import { Folder } from '../model/types/Folder';

const fetchFoldersApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchFolders: build.query<Folder[], number>({
            query: () => ({
                url: '/api/folder/fetch_all',
            }),
        }),
    }),
});

export const useFolders = fetchFoldersApi.useFetchFoldersQuery;
