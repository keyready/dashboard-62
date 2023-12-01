import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack } from 'shared/UI/Stack';
import { Input } from 'shared/UI/Input';
import classes from './DiplomaScoreInput.module.scss';

interface DiplomaScoreInputProps {
    className?: string;
    title: string;
    value?: number;
    setValue: (value: number) => void;
}

export const DiplomaScoreInput = memo((props: DiplomaScoreInputProps) => {
    const { className, setValue, value, title } = props;

    return (
        <HStack maxW className={classNames(classes.DiplomaScoreInput, {}, [className])}>
            <div className={classes.title}>{title}</div>
            <Input
                min={3}
                max={5}
                className={classes.input}
                value={value}
                onChange={(value) => setValue(~~value)}
                placeholder="5"
            />
        </HStack>
    );
});
