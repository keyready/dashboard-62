import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { DataTable, DataTableSelectionSingleChangeEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import classes from './Table.module.scss';

export interface TableData {
    name: string;
    HES: string;
    speciality: string;
    age: string;
    hobby: string;
}

interface TableProps {
    className?: string;
    data: TableData[];
    multiple?: boolean;
    selectedValues?: TableData[];
    setSelectedValues?: (value: TableData[]) => void;
}

export const Table = memo((props: TableProps) => {
    const { className, data, setSelectedValues, selectedValues, multiple = false } = props;

    const handleTableSelectionChange = useCallback(
        (event: any) => {
            setSelectedValues?.(event.value);
        },
        [setSelectedValues],
    );

    return (
        <DataTable
            className={classNames(classes.Table, {}, [className])}
            value={data}
            removableSort
            selectionMode="single"
            // selection={selectedValues || []}
            sortField="name"
            sortOrder={1}
            emptyMessage="Выберите от 2 до 4 выпускников, чтобы перейти к углубленному сравнению"
            // onSelectionChange={handleTableSelectionChange}
        >
            <Column style={{ height: 50 }} selectionMode="multiple" />
            <Column alignHeader="center" dataType="text" field="name" header="ФИО" sortable />
            <Column alignHeader="center" dataType="text" field="HES" header="ВУЗ" sortable />
            <Column
                alignHeader="center"
                dataType="text"
                field="speciality"
                header="Специальность"
                sortable
            />
            <Column alignHeader="center" dataType="numeric" field="age" header="Возраст" sortable />
            <Column alignHeader="center" dataType="text" field="hobby" header="Хобби" sortable />
        </DataTable>
    );
});
