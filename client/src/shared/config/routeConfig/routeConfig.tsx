import { RouteProps } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { MainPage } from 'pages/MainPage';
import { CandidatesPage } from 'pages/CandidatesPage';
import { UploadFilesPage } from 'pages/UploadFilesPage';
import { DetailedComparisonPage } from 'pages/DetailedComparisonPage';
import { CreateCandidatePage } from 'pages/CreateCandidatePage';
import { GroupingPage } from 'pages/GroupingPage';
import { CreateFolderPage } from 'pages/CreateFolderPage';
import { AllocationPage } from 'pages/AllocationPage';
import { ManualGroupingPage } from 'pages/ManualGroupingPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = 'main',
    CANDIDATES = 'candidates',
    DETAILEDCOMPARISON = 'detailedcomparison',
    FILESUPLOAD = 'filesupload',
    CREATECANDIDATEPAGE = 'createcandidatepage',
    GROUPING = 'grouping',
    CREATEGROUP = 'creategroup',
    ALLOCATION = 'allocation',
    MANUALGROUPING = 'manualgrouping',

    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CANDIDATES]: '/candidates',
    [AppRoutes.GROUPING]: '/candidates/grouping',
    [AppRoutes.MANUALGROUPING]: '/candidates/manual',
    [AppRoutes.ALLOCATION]: '/candidates/allocation',
    [AppRoutes.DETAILEDCOMPARISON]: '/candidates/detailed_comparison',
    [AppRoutes.FILESUPLOAD]: '/candidates/upload',
    [AppRoutes.CREATECANDIDATEPAGE]: '/candidate/create',
    [AppRoutes.CREATEGROUP]: '/groups/create',

    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
    // public routes
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CREATECANDIDATEPAGE]: {
        path: RoutePath.createcandidatepage,
        element: <CreateCandidatePage />,
    },

    // private route
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
    [AppRoutes.GROUPING]: {
        path: RoutePath.grouping,
        element: <GroupingPage />,
        authOnly: true,
    },
    [AppRoutes.MANUALGROUPING]: {
        path: RoutePath.manualgrouping,
        element: <ManualGroupingPage />,
        authOnly: true,
    },
    [AppRoutes.CREATEGROUP]: {
        path: RoutePath.creategroup,
        element: <CreateFolderPage />,
        authOnly: true,
    },
    [AppRoutes.ALLOCATION]: {
        path: RoutePath.allocation,
        element: <AllocationPage />,
        authOnly: true,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
};
