import {
    AvatarIcon,
    DesktopIcon,
    GearIcon,
    GitHubLogoIcon,
    HeartIcon,
    PaperPlaneIcon,
} from '@radix-ui/react-icons';
import { MenuItemCommandEvent } from 'primereact/menuitem';

export const items = [
    {
        label: 'Разработчики',
        icon: <AvatarIcon style={{ marginRight: 10 }} />,
        items: [
            {
                label: 'Корчак Родион',
                icon: <DesktopIcon style={{ marginRight: 10 }} />,
                items: [
                    {
                        label: 'GitHub',
                        icon: <GitHubLogoIcon style={{ marginRight: 10 }} />,
                        command(event: MenuItemCommandEvent) {
                            event.originalEvent.preventDefault();
                            window.open('//github.com/keyready', '_blank');
                        },
                    },
                    {
                        label: 'Telegram',
                        icon: <PaperPlaneIcon style={{ marginRight: 10 }} />,
                        command(event: MenuItemCommandEvent) {
                            event.originalEvent.preventDefault();
                            window.open('//t.me/keyrea_dy', '_blank');
                        },
                    },
                ],
            },
            {
                label: 'Кофанов Валентин',
                icon: <GearIcon style={{ marginRight: 10 }} />,
                items: [
                    {
                        label: 'GitHub',
                        icon: <GitHubLogoIcon style={{ marginRight: 10 }} />,
                        command(event: MenuItemCommandEvent) {
                            event.originalEvent.preventDefault();
                            window.open('//github.com/VALIKO666', '_blank');
                        },
                    },
                    {
                        label: 'Telegram',
                        icon: <PaperPlaneIcon style={{ marginRight: 10 }} />,
                        command(event: MenuItemCommandEvent) {
                            event.originalEvent.preventDefault();
                            window.open('//t.me/VALI666KO', '_blank');
                        },
                    },
                ],
            },
            {
                label: 'Поляков Дмитрий',
                icon: <HeartIcon style={{ marginRight: 10 }} />,
                items: [
                    {
                        label: 'Telegram',
                        icon: <PaperPlaneIcon style={{ marginRight: 10 }} />,
                        command(event: MenuItemCommandEvent) {
                            event.originalEvent.preventDefault();
                            window.open('//t.me/operculum', '_blank');
                        },
                    },
                ],
            },
        ],
    },
];
