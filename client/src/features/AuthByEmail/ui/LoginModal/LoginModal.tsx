import { Suspense } from 'react';
import { LoginFormLazy } from 'features/AuthByEmail/ui/LoginForm/LoginForm.lazy';
import { Loader } from 'shared/UI/Loader';
import { Modal } from 'react-bootstrap';

interface LoginModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { onClose, isOpen } = props;

    return (
        <Modal lazy onHide={onClose} show={isOpen}>
            <Suspense fallback={<Loader />}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
