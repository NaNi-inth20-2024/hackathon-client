import styles from './styles.module.scss';

type Properties = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

const Modal: React.FC<Properties> = ({ children, isOpen, onClose }) => {
    return (
        <>
            <div
                className={styles.modal}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                <div className={styles.modal__content}>{children}</div>
                <div className={styles.modal__overlay} onClick={onClose}></div>
            </div>
        </>
    );
};

export { Modal };
