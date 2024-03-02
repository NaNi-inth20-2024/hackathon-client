import { useLocation } from 'react-router-dom';
import { LoginForm } from './components/login-form/login-form';
import { RegisterForm } from './components/register-form/register-form';

import styles from './styles.module.scss';

const AuthPage: React.FC = () => {
    const location = useLocation();

    return (
        <div className={styles.auth_page}>
            {location.pathname !== '/login' ? <LoginForm /> : <RegisterForm />}
        </div>
    );
};

export { AuthPage };
