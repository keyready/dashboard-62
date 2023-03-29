import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { AppRouter } from 'app/providers/AppRouter';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        // проверить, был ли авторизован пользователь перед закрытием вкладки
        dispatch(userActions.initAuthData());

        // TODO: переключатель предпочитаемой темы приложения
        // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //     setTheme?.(Theme.DARK);
        // } else {
        //     setTheme?.(Theme.LIGHT);
        // }
    }, [dispatch]);

    return (
        <div
            className={classNames('app', {}, [theme])}
        >
            <Suspense fallback="">
                <div className="page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
