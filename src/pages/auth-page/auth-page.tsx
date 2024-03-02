import { LoginForm } from './components/login-form/login-form';

import styles from './styles.module.scss';

const AuthPage: React.FC = () => {
    return (
        <div className={styles.auth_page}>
            <LoginForm />
        </div>
    );
};

export { AuthPage };
