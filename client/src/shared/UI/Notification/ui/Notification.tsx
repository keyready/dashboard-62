import { memo } from 'react';
import { Toaster } from 'react-hot-toast';

interface NotificationProps {}

export const Notification = memo((props: NotificationProps) => (
    <Toaster
        toastOptions={{
            style: {
                background: 'var(--toat-bg)',
                color: 'var(--primary-color)',
                minWidth: 500,
            },
        }}
        position="top-left"
    />
));
