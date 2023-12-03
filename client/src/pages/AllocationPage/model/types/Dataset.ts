import { Statistics } from '../../ui/StatisticsCard/StatisticsCard';

export interface Dataset {
    data: any[];
    statistics: Statistics;
}

export interface AllocationPageSchema {
    data?: Dataset;
    isLoading: boolean;
    error?: string;
}
