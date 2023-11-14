import { useSearchParams } from 'react-router-dom';

export function useURLParams() {
    const [searchParams, setSearchParams] = useSearchParams();

    function addSearchParams(newParams: Record<string, string>) {
        for (const key in newParams) {
            searchParams.set(key, newParams[key]);
        }
        setSearchParams(searchParams);
    }

    function deleteSearchParams(key: string) {
        searchParams.delete(key);
        setSearchParams(searchParams);
    }

    function getSearchParams(): { param: string; value: string }[] {
        return Array.from(searchParams.entries()).map(([param, value]) => ({ param, value })) || [];
    }

    function getSearchParam(searchParam: string): string | undefined {
        const params = Array.from(searchParams.entries()).map(([param, value]) => ({
            param,
            value,
        }));
        return params.filter((param) => param.param === searchParam)[0]?.value || undefined;
    }

    return { addSearchParams, deleteSearchParams, getSearchParams, getSearchParam };
}
