import { RouteProps } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { MainPage } from 'pages/MainPage';
import { CandidatesPage } from 'pages/CandidatesPage';
import { ComparisonPage } from 'pages/ComparisonPage';
import { UploadFilesPage } from 'pages/UploadFilesPage';
import { DetailedComparisonPage } from 'pages/DetailedComparisonPage';
import { LoginPage } from 'pages/LoginPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    CANDIDATES = 'candidates',
    COMPARISON = 'comparison',
    DETAILEDCOMPARISON = 'detailedcomparison',
    FILESUPLOAD = 'filesupload',
    LOGINPAGE = 'loginpage',

    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.CANDIDATES]: '/candidates',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.COMPARISON]: '/comparison',
    [AppRoutes.DETAILEDCOMPARISON]: '/detailed_comparison',
    [AppRoutes.FILESUPLOAD]: '/files_upload',
    [AppRoutes.LOGINPAGE]: '/login',

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
    [AppRoutes.COMPARISON]: {
        path: RoutePath.comparison,
        element: <ComparisonPage />,
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
    [AppRoutes.LOGINPAGE]: {
        path: RoutePath.loginpage,
        element: <LoginPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
};
