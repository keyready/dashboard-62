import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack, VStack } from 'shared/UI/Stack';
import { useFolders } from 'entities/Folder';
import { Skeleton } from 'primereact/skeleton';
import { Text } from 'shared/UI/Text';
import classes from './VerticalFolderList.module.scss';

interface VerticalFolderListProps {
    className?: string;
    handleClick: (id: number) => void;
    isCandidateAdding?: boolean;
}

export const VerticalFolderList = memo((props: VerticalFolderListProps) => {
    const { className, handleClick, isCandidateAdding } = props;

    const { data: folders, isLoading } = useFolders(0, {
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) {
        return (
            <VStack maxW className={classNames(classes.VerticalFolderList, {}, [className])}>
                {new Array(4).fill(0).map((_, index) => (
                    <Skeleton key={index} width="100%" height="60px" />
                ))}
            </VStack>
        );
    }

    if (!isLoading && !folders?.length) {
        return (
            <VStack maxW className={classNames(classes.VerticalFolderList, {}, [className])}>
                <Text title="Прежде, чем это сделать, нужно создать хотя бы ожну группу" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="8"
            maxW
            className={classNames(
                classes.VerticalFolderList,
                { [classes.disabled]: isCandidateAdding },
                [className],
            )}
        >
            {folders?.map((folder) => (
                <HStack
                    onClick={isCandidateAdding ? () => {} : () => handleClick(folder.id)}
                    className={classes.card}
                    maxW
                    justify="between"
                >
                    <Text size="small" title={folder.title} />
                    <Text
                        size="small"
                        text={`Участники: ${folder.participants?.length || ' пока нет'}`}
                    />
                </HStack>
            ))}
        </VStack>
    );
});
