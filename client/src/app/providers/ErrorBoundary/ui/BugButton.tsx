import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) throw Error;
    }, [error]);

    return (
        <Button onClick={onThrow} variant="outline-danger">
            Сломать
        </Button>
    );
};
