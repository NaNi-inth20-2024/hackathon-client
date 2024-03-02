import { forwardRef } from 'react';

import styles from './styles.module.scss';
import clsx from 'clsx';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <input
            ref={ref}
            {...rest}
            className={clsx(styles.input, className)}
        ></input>
    );
});

export { Input };
