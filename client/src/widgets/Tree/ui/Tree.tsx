import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import { TreeNode } from 'primereact/treenode';
import {
    TreeSelect,
    TreeSelectChangeEvent,
    TreeSelectSelectionKeysType,
} from 'primereact/treeselect';
import classes from './Tree.module.scss';

interface TreeProps {}

export const Tree = memo((props: TreeProps) => {
    const [nodes, setNodes] = useState<TreeNode[]>();
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<
        string | TreeSelectSelectionKeysType | TreeSelectSelectionKeysType[] | null | undefined
    >(null);

    useEffect(() => {
        setNodes([
            {
                key: '0',
                label: 'Documents',
                data: 'Documents Folder',
                children: [
                    {
                        key: '0-0',
                        label: 'Work',
                        data: 'Work Folder',
                        children: [
                            {
                                key: '0-0-0',
                                label: 'Expenses.doc',
                                data: 'Expenses Document',
                            },
                            {
                                key: '0-0-2',
                                label: 'Resume.doc',
                                data: 'Resume Document',
                            },
                            {
                                key: '0-0-3',
                                label: 'Resume.doc',
                                data: 'Resume Document',
                            },
                            {
                                key: '0-0-4',
                                label: 'Resume.doc',
                                data: 'Resume Document',
                            },
                        ],
                    },
                    {
                        key: '0-1',
                        label: 'Home',
                        data: 'Home Folder',
                        children: [
                            {
                                key: '0-1-0',
                                label: 'Invoices.txt',
                                data: 'Invoices for this month',
                            },
                        ],
                    },
                ],
            },
            {
                key: '1',
                label: 'Events',
                data: 'Events Folder',
                children: [
                    {
                        key: '1-0',
                        label: 'Meeting',
                        data: 'Meeting',
                    },
                    {
                        key: '1-1',
                        label: 'Product Launch',
                        data: 'Product Launch',
                    },
                    {
                        key: '1-2',
                        label: 'Report Review',
                        data: 'Report Review',
                    },
                ],
            },
            {
                key: '2',
                label: 'Movies',
                data: 'Movies Folder',
                children: [
                    {
                        key: '2-0',
                        label: 'Al Pacino',
                        data: 'Pacino Movies',
                        children: [
                            {
                                key: '2-0-0',
                                label: 'Scarface',
                                data: 'Scarface Movie',
                            },
                            {
                                key: '2-0-1',
                                label: 'Serpico',
                                data: 'Serpico Movie',
                            },
                        ],
                    },
                    {
                        key: '2-1',
                        label: 'Robert De Niro',
                        data: 'De Niro Movies',
                        children: [
                            {
                                key: '2-1-0',
                                label: 'Goodfellas',
                                data: 'Goodfellas Movie',
                            },
                            {
                                key: '2-1-1',
                                label: 'Untouchables',
                                data: 'Untouchables Movie',
                            },
                        ],
                    },
                ],
            },
        ]);
    }, []);

    return (
        <TreeSelect
            className={classes.Tree}
            value={selectedNodeKeys}
            onChange={(e: TreeSelectChangeEvent) => setSelectedNodeKeys(e.value)}
            options={nodes}
            metaKeySelection={false}
            selectionMode="checkbox"
            display="chip"
            placeholder="Select Items"
        />
    );
});
