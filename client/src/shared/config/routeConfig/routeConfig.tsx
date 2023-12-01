import { RouteProps } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { MainPage } from 'pages/MainPage';
import { CandidatesPage } from 'pages/CandidatesPage';
import { UploadFilesPage } from 'pages/UploadFilesPage';
import { DetailedComparisonPage } from 'pages/DetailedComparisonPage';
import { CreateCandidatePage } from 'pages/CreateCandidatePage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = 'main',
    CANDIDATES = 'candidates',
    DETAILEDCOMPARISON = 'detailedcomparison',
    FILESUPLOAD = 'filesupload',
    CREATECANDIDATEPAGE = 'createcandidatepage',

    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.CANDIDATES]: '/candidates',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DETAILEDCOMPARISON]: '/candidate/detailed_comparison',
    [AppRoutes.FILESUPLOAD]: '/candidate/upload',
    [AppRoutes.CREATECANDIDATEPAGE]: '/candidate/create',

    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CANDIDATES]: {
        path: RoutePath.candidates,
        element: <CandidatesPage />,
        authOnly: true,
    },
    [AppRoutes.DETAILEDCOMPARISON]: {
        path: RoutePath.detailedcomparison,
        element: <DetailedComparisonPage />,
        authOnly: true,
    },
    [AppRoutes.FILESUPLOAD]: {
        path: RoutePath.filesupload,
        element: <UploadFilesPage />,
        authOnly: true,
    },
    [AppRoutes.CREATECANDIDATEPAGE]: {
        path: RoutePath.createcandidatepage,
        element: <CreateCandidatePage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
};
