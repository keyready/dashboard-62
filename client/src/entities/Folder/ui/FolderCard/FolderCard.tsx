import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { HStack, VStack } from 'shared/UI/Stack';
import { Text } from 'shared/UI/Text';
import {
    ArrowRightIcon,
    DoubleArrowRightIcon,
    PlusCircledIcon,
    TrashIcon,
} from '@radix-ui/react-icons';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { MenuItem, MenuItemCommandEvent } from 'primereact/menuitem';
import { ContextMenu } from 'primereact/contextmenu';
import { Button } from 'shared/UI/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useToaster } from 'shared/lib/hooks/useToaster/useToaster';
import { Folder } from '../../model/types/Folder';
import { deleteFolder } from '../../model/services/deleteFolder';
import classes from './FolderCard.module.scss';

interface FolderCardProps {
    className?: string;
    folder?: Folder;
    isFirst?: boolean;
    refreshFolderList?: () => void;
}

export const FolderCard = memo((props: FolderCardProps) => {
    const { className, folder, isFirst, refreshFolderList } = props;

    const cm = useRef<ContextMenu>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { pending } = useToaster();

    const [width, setWidth] = useState<number>(25);
    const [content, setContent] = useState<ReactNode>(<DoubleArrowRightIcon />);

    const handleButtonHover = useCallback(() => {
        if (width === 25) {
            setWidth(175);
            setContent(
                <>
                    <p>Распределения</p>
                    <ArrowRightIcon />
                </>,
            );
        } else {
            setWidth(25);
            setContent(<DoubleArrowRightIcon />);
        }
    }, [width]);

    const handleAllocationClick = useCallback(() => {
        navigate(`${RoutePath.allocation}?folder=${folder?.title}`);
    }, [folder, navigate]);

    const handleNewFolderCreateClick = useCallback(() => {
        navigate(RoutePath.creategroup);
    }, [navigate]);

    const handleGroupClick = useCallback(() => {
        navigate(`${RoutePath.folderoverview}/${folder?.id}`);
    }, [folder?.id, navigate]);

    const handleFolderDelete = useCallback(
        async (folderId?: number) => {
            if (folderId) {
                const result = await pending(dispatch(deleteFolder(folderId)), {
                    loadingMessage: 'Удаляем группу...',
                    successMessage: 'Группа удалена!',
                });

                if (result.meta.requestStatus === 'fulfilled') {
                    refreshFolderList?.();
                }
            }
        },
        [dispatch, pending, refreshFolderList],
    );

    const items: MenuItem[] = useMemo(
        () => [
            {
                label: 'Удалить из группы',
                icon: <TrashIcon className={classes.icon} />,
                command(event: MenuItemCommandEvent) {
                    event.originalEvent.preventDefault();
                    handleFolderDelete?.(folder?.id);
                },
            },
        ],
        [folder?.id, handleFolderDelete],
    );

    if (isFirst) {
        return (
            <div className={classNames(classes.wrapper, {}, [className])}>
                <VStack maxW justify="between" className={classes.FolderCard}>
                    <Text title="Создать новую группу" />
                    <Button variant="clear" onClick={handleNewFolderCreateClick}>
                        <PlusCircledIcon className={classes.addIcon} />
                    </Button>
                </VStack>
            </div>
        );
    }

    return (
        <div className={classNames(classes.wrapper, {}, [className])}>
            <ContextMenu model={items} ref={cm} />
            <VStack
                onContextMenu={(e) => cm.current?.show(e)}
                maxW
                justify="between"
                className={classes.FolderCard}
            >
                <Text className={classes.header} onClick={handleGroupClick} title={folder?.title} />

                <VStack maxW>
                    <VStack maxW>
                        <Text
                            size="extrasmall"
                            text="Критерий группировки"
                            align="left"
                            className={classes.text}
                        />
                        <Text size="extrasmall" text={folder?.groupingRule} />
                    </VStack>

                    <HStack
                        gap="8"
                        justify="center"
                        onMouseEnter={handleButtonHover}
                        onMouseLeave={handleButtonHover}
                        onClick={handleAllocationClick}
                        style={{ width: `${width}px` }}
                        className={classes.expand}
                    >
                        {content}
                    </HStack>
                </VStack>
            </VStack>
        </div>
    );
});
