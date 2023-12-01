import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import {
    AutoComplete as PAutoComplete,
    AutoCompleteChangeEvent,
    AutoCompleteCompleteEvent,
} from 'primereact/autocomplete';
import { HStack } from 'shared/UI/Stack';
import classes from './AutoComplete.module.scss';

interface AutoCompleteProps {
    className?: string;
    value: string;
    setValue: (value: string) => void;
    data: string[];
    placeholder?: string;
    required?: boolean;
}

export const AutoComplete = memo((props: AutoCompleteProps) => {
    const { className, value, placeholder, required, data, setValue } = props;

    const [items, setItems] = useState<string[]>(data);

    const handleChange = useCallback(
        (event: AutoCompleteChangeEvent) => {
            setValue(event.value);
        },
        [setValue],
    );
    const search = useCallback((event: AutoCompleteCompleteEvent) => {
        setItems((prevState) =>
            prevState.filter((item) => item.toLowerCase().includes(event.query.toLowerCase())),
        );
    }, []);

    return (
        <HStack maxW className={classNames(classes.AutoComplete, {}, [className])}>
            <PAutoComplete
                required={required}
                placeholder={placeholder}
                value={value}
                suggestions={items}
                completeMethod={search}
                onChange={handleChange}
            />
        </HStack>
    );
});
