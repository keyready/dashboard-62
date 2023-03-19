export {
    ComparisonPageLazy as ComparisonPage,
} from './ui/ComparisonPage/ComparisonPage.lazy';
export { compareCandidates, ComparisonProps } from './model/services/compareCandidates';
export {
    getComparisonData,
    getComparisonError,
    getComparisonIsLoading,
} from './model/selectors/getComparisonData';
export { CompareActions, CompareReducer } from './model/slice/CompareSlice';
export {
    ComparedData, ComparedDataSchema, BarsInfo, RadarInfo,
} from './model/types/ComparedData';
