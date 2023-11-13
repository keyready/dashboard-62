import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Candidate } from 'entities/Candidate';
import classes from './Table.module.scss';

interface TableProps {
    className?: string;
    data: Candidate[];
    multiple?: boolean;
    // selectedValues?: Candidate[];
    // setSelectedValues?: (value: Candidate[]) => void;
}

export const Table = memo((props: TableProps) => {
    const { className, data, multiple = false } = props;
    //
    // const handleTableSelectionChange = useCallback(
    //     (event: any) => {
    //         setSelectedValues?.(event.value);
    //     },
    //     [setSelectedValues],
    // );

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
            <Column alignHeader="center" dataType="text" field="firstname"
header="ФИО" sortable />
            <Column alignHeader="center" dataType="text" field="HES"
header="ВУЗ" sortable />
            <Column
                alignHeader="center"
                dataType="text"
                field="department"
                header="Специальность"
                sortable
            />
            <Column alignHeader="center" dataType="numeric" field="age"
header="Возраст" sortable />
            <Column alignHeader="center" dataType="text" field="hobby"
header="Хобби" sortable />
        </DataTable>
    );
});
