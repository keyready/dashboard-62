import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo, useState } from 'react';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { HStack } from 'shared/UI/Stack';
import classes from './Autocomplete.module.scss';
import { fetchMails } from '../api/fetchMails';

interface AutocompleteProps {
    className?: string;
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    required?: boolean;
}

export const Autocomplete = memo((props: AutocompleteProps) => {
    const { className, setValue, value, placeholder, required } = props;

    const [items, setItems] = useState<string[]>([]);
    const mails = useMemo(() => 'mail.ru yandex.ru list.ru inbox.ru gmail.com'.split(' '), []);

    const search = useCallback(
        async (event: AutoCompleteCompleteEvent) => {
            const value = event.query;
            if (value.includes('@')) {
                const suggestions = await fetchMails(value);
                setItems(suggestions.map((mail: string) => `${value.split('@')[0]}@${mail}`));
                return;
            }
            setItems(mails.map((mail) => `${value}@${mail}`));
        },
        [mails],
    );

    return (
        <HStack justify="start" maxW className={classNames(classes.Autocomplete, {}, [className])}>
            <AutoComplete
                required={required}
                placeholder={placeholder}
                value={value}
                suggestions={items}
                completeMethod={search}
                onChange={(e) => setValue(e.value)}
            />
        </HStack>
    );
});
