import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assests/icons/404.svg';
import LeaderBoardIcon from 'shared/assests/icons/leaderboard.svg';
import UploadFiles from 'shared/assests/icons/upload.svg';
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
                path: RoutePath.candidates,
                text: 'Кандидаты',
                Icon: LeaderBoardIcon,
            },
            {
                path: RoutePath.filesupload,
                text: 'Загрузить резюме',
                Icon: UploadFiles,
            },
        ];
        if (userData) {
            SidebarItemsList.push();
        }

        return SidebarItemsList;
    },
);
