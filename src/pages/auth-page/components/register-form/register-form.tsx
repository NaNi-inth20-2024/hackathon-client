import { Button, Input, Radio } from '@/components';

import styles from '../login-form/styles.module.scss';
import { useCallback, useRef } from 'react';
import { useRegisterMutation } from '@/lib/apis';
import { useAppDispatch } from '@/lib/store/hooks';
import { setUser } from '@/lib/store/slices/user.slice';
import { RegisterPayload } from '@/common/types';
import { NavLink, useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [register] = useRegisterMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(formRef.current as HTMLFormElement);
            const data = Object.fromEntries(
                formData.entries(),
            ) as RegisterPayload;
            register(data)
                .unwrap()
                .then((user) => {
                    dispatch(setUser(user.user));
                    localStorage.setItem('access_token', user.access);
                    navigate('/profile');
                });
        },
        [dispatch, navigate, register],
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
                        <Radio name="role" value="TEACHER" required />
                        Teacher
                        <Radio name="role" value="STUDENT" required />
                        Student
                    </div>
                </label>
                <label className={styles.login_form__label}>
                    First Name
                    <Input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        required
                    />
                </label>

                <label className={styles.login_form__label}>
                    Last Name
                    <Input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
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
                <NavLink to={'/login'}>Already have an account? Login</NavLink>
                <Button type="submit" className={styles.login_form__button}>
                    Sign up
                </Button>
            </form>
        </div>
    );
};

export { RegisterForm };
