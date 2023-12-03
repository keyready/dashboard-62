import toast, { ToastOptions } from 'react-hot-toast';

interface PromiseOptions {
    successMessage?: string;
    errorMessage?: string;
    loadingMessage?: string;
}

export function useToaster(options?: ToastOptions) {
    const success = (message: string) => toast.success(message, options);

    const error = (message: string) => toast.error(message, options);

    const pending = (promise: Promise<any>, promiseOptions?: PromiseOptions) =>
        toast.promise(
            promise,
            {
                loading: promiseOptions?.loadingMessage || 'Немного подождите...',
                success: promiseOptions?.successMessage || 'Ура! Все получилось!',
                error: promiseOptions?.errorMessage || 'Что-то пошло не так...',
            },
            options,
        );

    return { success, error, pending };
}
