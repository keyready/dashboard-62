import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback, useMemo, useState } from 'react';
import { HStack, VStack } from 'shared/UI/Stack';
import { Folder } from 'entities/Folder';
import { Text } from 'shared/UI/Text';
import { ArrowRightIcon, DoubleArrowRightIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/UI/Button';
import classes from './FolderCard.module.scss';

interface FolderCardProps {
    className?: string;
    folder?: Folder;
    isFirst?: boolean;
}

export const FolderCard = memo((props: FolderCardProps) => {
    const { className, folder, isFirst } = props;

    const [width, setWidth] = useState<number>(25);
    const [content, setContent] = useState<ReactNode>(<DoubleArrowRightIcon />);

    const navigate = useNavigate();

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
            <VStack maxW justify="between" className={classes.FolderCard}>
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
