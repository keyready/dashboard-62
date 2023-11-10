import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import classes from './Disclosure.module.scss';

interface DisclosureProps {
    className?: string;
    titles: ReactNode[];
    paragraphs: ReactNode[];
    multiple?: boolean;
}

export const Disclosure = memo((props: DisclosureProps) => {
    const { className, multiple = false, titles, paragraphs } = props;

    return (
        <Accordion multiple={multiple} className={classNames(classes.accordion, {}, [className])}>
            {titles.map((title, index) => (
                <AccordionTab key={index} header={title}>
                    {paragraphs[index]}
                </AccordionTab>
            ))}
        </Accordion>
    );
});
