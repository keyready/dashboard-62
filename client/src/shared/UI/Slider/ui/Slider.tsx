import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Slider as PSlider, SliderChangeEvent } from 'primereact/slider';
import { HStack } from 'shared/UI/Stack';
import classes from './Slider.module.scss';

interface SliderProps {
    className?: string;
    value: number;
    setValue: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
}

export const Slider = memo((props: SliderProps) => {
    const { className, value, setValue, min = 18, max = 40, step = 1 } = props;

    const handleSliderValueChange = useCallback(
        (event: SliderChangeEvent) => {
            setValue(event.value as number);
        },
        [setValue],
    );

    return (
        <HStack maxW className={classNames(classes.Slider, {}, [className])}>
            <PSlider
                style={{ width: '100%' }}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleSliderValueChange}
            />
        </HStack>
    );
});
