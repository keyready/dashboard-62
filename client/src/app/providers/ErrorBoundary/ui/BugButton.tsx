import { useEffect, useState } from 'react';
import { Button } from 'shared/UI/Button';

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
        <Button onClick={onThrow} variant="danger">
            Сломать
        </Button>
    );
};
