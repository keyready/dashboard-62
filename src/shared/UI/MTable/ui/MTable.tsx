/* eslint-disable max-len */
import { memo, useMemo } from 'react';
import { Alert, Pagination, Table } from 'react-bootstrap';
import { Card } from 'shared/UI/Card';
import { Candidate } from 'entities/Candidate';
import { Loader } from 'shared/UI/Loader';
import classes from './MTable.module.scss';

export interface TableDataProps {
    id: number;
    name: string;
    education: string;
    specialization: string;
    age: number;
    experience: number;
}

interface MTableProps {
    className?: string;
    tableData: Candidate[];
    isLoading?: boolean
    clearCandidatesList?: () => void;
}

export const MTable = memo((props: MTableProps) => {
    const {
        className,
        tableData,
        isLoading,
        clearCandidatesList,
    } = props;

    const headers = useMemo<string[]>(
        () => [
            'ФИО', 'Образование', 'Специальность',
            'Возраст', 'Опыт работы', 'Хобби'],
        [],
    );

    if (tableData.length === 0) {
        return (
            <Card className={classes.tableWrapper}>
                <Alert variant="success">
                    Выберите кандидатов (для сравнения — от 2 до 4 кандидатов)
                </Alert>
                <Loader />
            </Card>
        );
    }

    return (
        <Card className={classes.tableWrapper}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((candidate, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                {`${candidate.lastname} ${candidate.firstname} ${candidate.middlename}`}
                            </td>
                            <td>{candidate.education}</td>
                            <td>{candidate.speciality}</td>
                            <td>{candidate.age}</td>
                            <td>{candidate.experience}</td>
                            <td>{candidate.hobby}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
});
