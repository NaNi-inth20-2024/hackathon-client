import { Button, Input } from '@/components';

import styles from './styles.module.scss';
import { useCallback, useRef } from 'react';

type LoginPayload = {
    email: string;
    password: string;
};

const LoginForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(formRef.current as HTMLFormElement);
            const data = Object.fromEntries(formData.entries()) as LoginPayload;
            console.log(data);
        },
        [],
    );

    return (
        <div>
            <form
                className={styles.login_form}
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <h1 className={styles.login_form__title}>Welcome back</h1>
                <label className={styles.login_form__label}>
                    Email
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                </label>
                <label className={styles.login_form__label}>
                    Password
                    <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        pattern=".{8,}"
                    />
                </label>
                <Button type="submit" className={styles.login_form__button}>
                    Login
                </Button>
            </form>
        </div>
    );
};

export { LoginForm };
