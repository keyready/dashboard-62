import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routerConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/UI/PageLoader';
import { RequireAuth } from 'app/providers/AppRouter/ui/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
