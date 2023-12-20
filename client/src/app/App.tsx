import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/AppRouter';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import { Navbar } from 'widgets/Navbar';
import { Notification } from 'shared/UI/Notification';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            {/* <ContextMenu global model={items} breakpoint="1000px" /> */}
            <Notification />

            <Suspense fallback="">
                <Navbar />
                <div className="page">{inited && <AppRouter />}</div>
            </Suspense>
        </div>
    );
};
