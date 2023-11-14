import { memo, useCallback } from 'react';
import { Paginator as PPaginator, PaginatorPageChangeEvent } from 'primereact/paginator';

interface PaginatorProps {
    className?: string;
    currentPage: number;
    setCurrentPage: (value: number) => void;
    currentLimit: number;
    setCurrentLimit: (value: number) => void;
    totalCandidates?: number;
}

export const Paginator = memo((props: PaginatorProps) => {
    const {
        className,
        setCurrentLimit,
        setCurrentPage,
        currentPage,
        currentLimit,
        totalCandidates,
    } = props;

    const onPageChange = useCallback(
        (event: PaginatorPageChangeEvent) => {
            setCurrentLimit(event.rows);
            setCurrentPage(event.page);
        },
        [setCurrentLimit, setCurrentPage],
    );

    return (
        <PPaginator
            className={className}
            first={currentPage * currentLimit}
            rows={currentLimit}
            totalRecords={totalCandidates || 0}
            rowsPerPageOptions={[10, 15, 20, 50]}
            onPageChange={onPageChange}
        />
    );
});
