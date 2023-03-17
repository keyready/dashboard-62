import { RouteProps } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { MainPage } from 'pages/MainPage';
import { CandidatesPage } from 'pages/CandidatesPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    CANDIDATES = 'candidates',
    HEROES = 'heroes',

    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.CANDIDATES]: '/candidates',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.HEROES]: '/heroes',

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
    [AppRoutes.HEROES]: {
        path: RoutePath.heroes,
        element: <NotFound />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
};
