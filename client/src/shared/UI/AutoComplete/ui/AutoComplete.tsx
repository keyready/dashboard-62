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
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    data: string[];
}

export const AutoComplete = memo((props: AutoCompleteProps) => {
    const { className, placeholder, onChange, value, data } = props;

    const [items, setItems] = useState<string[]>(data);

    const handleChange = useCallback(
        (event: AutoCompleteChangeEvent) => {
            const { value } = event;
            onChange(value);
        },
        [onChange],
    );

    const handleSearchTrigger = useCallback(
        (event: AutoCompleteCompleteEvent) => {
            setItems(data.filter((item) => item.toLowerCase().includes(event.query.toLowerCase())));
        },
        [data],
    );

    return (
        <HStack maxW className={classNames(classes.AutoComplete, {}, [className])}>
            <PAutoComplete
                value={value}
                suggestions={items}
                completeMethod={handleSearchTrigger}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </HStack>
    );
});
