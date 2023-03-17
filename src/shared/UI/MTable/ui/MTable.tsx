import { memo, useCallback } from 'react';
import { Form, Table } from 'react-bootstrap';
import { Card } from 'shared/UI/Card';
import { Simulate } from 'react-dom/test-utils';
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
    headers: string[];
    tableData: TableDataProps[];
    candidates: string[];
    setCandidates: (values: string[]) => void;
}

export const MTable = memo((props: MTableProps) => {
    const {
        className,
        headers,
        tableData,
        candidates,
        setCandidates,
    } = props;

    const changeHandler = useCallback((e) => {
        const candidate = e.target.id;
        const temps = candidates;
        if (temps.includes(candidate)) {
            temps.splice(temps.indexOf(candidate), 1);
        } else {
            temps.push(candidate);
        }

        setCandidates(temps);
    }, [candidates, setCandidates]);

    return (
        <Card className={classes.tableWrapper}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>мм?</th>
                        <th>#</th>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>
                                <Form>
                                    <Form.Check
                                        type="checkbox"
                                        id={data.id.toString()}
                                        onChange={changeHandler}
                                    />
                                </Form>
                            </td>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.education}</td>
                            <td>{data.specialization}</td>
                            <td>{data.age}</td>
                            <td>{data.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
});
