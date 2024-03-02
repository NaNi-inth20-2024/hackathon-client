import { Button, Input, Radio } from '@/components';

import styles from '../login-form/styles.module.scss';
import { useCallback, useRef } from 'react';

type RegisterPayload = {
    role: 'teacher' | 'student';
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

const RegisterForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(formRef.current as HTMLFormElement);
            const data = Object.fromEntries(
                formData.entries(),
            ) as RegisterPayload;
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
                <h1 className={styles.login_form__title}>Sign up</h1>
                <label className={styles.login_form__label}>
                    Role
                    <div className={styles.login_form__radio_group}>
                        <Radio name="role" value="teacher" required />
                        Teacher
                        <Radio name="role" value="student" required />
                        Student
                    </div>
                </label>
                <label className={styles.login_form__label}>
                    First Name
                    <Input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        required
                    />
                </label>

                <label className={styles.login_form__label}>
                    Last Name
                    <Input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        required
                    />
                </label>

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
                    Sign up
                </Button>
            </form>
        </div>
    );
};

export { RegisterForm };
