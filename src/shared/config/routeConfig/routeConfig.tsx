import { RouteProps } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { MainPage } from 'pages/MainPage';
import { CandidatesPage } from 'pages/CandidatesPage';
import { ComparisonPage } from 'pages/ComparisonPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    CANDIDATES = 'candidates',
    COMPARISON = 'comparison',

    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.CANDIDATES]: '/candidates',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.COMPARISON]: '/comparison',

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
    },
    [AppRoutes.COMPARISON]: {
        path: RoutePath.comparison,
        element: <ComparisonPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
};
