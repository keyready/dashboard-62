import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { HStack } from 'shared/UI/Stack';
import { Button } from 'shared/UI/Button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import classes from './FoldersList.module.scss';
import { Folder } from '../../model/types/Folder';
import { FolderCard } from '../FolderCard/FolderCard';

interface FoldersListProps {
    className?: string;
    folders: Folder[];
}

export const FoldersList = memo((props: FoldersListProps) => {
    const { className, folders } = props;

    return (
        <HStack gap="32" className={classNames(classes.FoldersList, {}, [className])}>
            <FolderCard isFirst />
            {folders.map((folder) => (
                <FolderCard key={folder.id} folder={folder} />
            ))}
        </HStack>
    );
});
