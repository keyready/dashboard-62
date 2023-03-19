import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assests/icons/404.svg';
import LeaderBoardIcon from 'shared/assests/icons/leaderboard.svg';
import UploadFilesIcon from 'shared/assests/icons/upload.svg';
import LoginIcon from 'shared/assests/icons/login.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Главная',
                Icon: MainIcon,
            },
            {
                path: RoutePath.loginpage,
                text: 'Авторизация',
                Icon: LoginIcon,
            },
        ];
        if (userData) {
            SidebarItemsList.splice(
                SidebarItemsList.indexOf({
                    path: RoutePath.loginpage,
                    text: 'Авторизация',
                    Icon: LoginIcon,
                }),
                1,
            );
            SidebarItemsList.push(
                {
                    path: RoutePath.candidates,
                    text: 'Кандидаты',
                    Icon: LeaderBoardIcon,
                },
                {
                    path: RoutePath.filesupload,
                    text: 'Загрузить резюме',
                    Icon: UploadFilesIcon,
                },
            );
        }

        return SidebarItemsList;
    },
);
