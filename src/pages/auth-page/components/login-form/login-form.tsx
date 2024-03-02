import { Button, Input } from '@/components';

import styles from './styles.module.scss';

const LoginForm: React.FC = () => {
    return (
        <div>
            <form className={styles.login_form}>
                <h1 className={styles.login_form__title}>Welcome back</h1>
                <label className={styles.login_form__label}>
                    Email
                    <Input type="email" placeholder="Email" />
                </label>
                <label className={styles.login_form__label}>
                    Password
                    <Input type="password" placeholder="Password" />
                </label>
                <Button type="submit" className={styles.login_form__button}>
                    Login
                </Button>
            </form>
        </div>
    );
};

export { LoginForm };
