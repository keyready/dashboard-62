import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect } from 'react';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { CandidateReducer } from 'entities/Candidate';
import { useSelector } from 'react-redux';
import { getSelectedCandidates } from 'pages/CandidatesPage';
import classes from './DetailedComparisonPage.module.scss';

interface DetailedComparisonPageProps {
    className?: string;
}

const DetailedComparisonPage = memo((props: DetailedComparisonPageProps) => {
    const {
        className,
    } = props;

    const selectedCandidates = useSelector(getSelectedCandidates);

    useEffect(() => {
        console.log(selectedCandidates);
    }, [selectedCandidates]);

    return (
        <Page className={classNames(classes.DetailedComparisonPage, {}, [className])}>
            //
        </Page>
    );
});

export default DetailedComparisonPage;
