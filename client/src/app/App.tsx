import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/AppRouter';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import { Navbar } from 'widgets/Navbar';
import { ContextMenu } from 'primereact/contextmenu';
import { MenuItem, MenuItemCommandEvent } from 'primereact/menuitem';
import {
    AvatarIcon,
    DesktopIcon,
    GearIcon,
    GitHubLogoIcon,
    HeartIcon,
    PaperPlaneIcon,
} from '@radix-ui/react-icons';
import { items } from './consts/const';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <ContextMenu global model={items} breakpoint="1000px" />
            <Suspense fallback="">
                <Navbar />
                <div className="page">{inited && <AppRouter />}</div>
            </Suspense>
        </div>
    );
};
