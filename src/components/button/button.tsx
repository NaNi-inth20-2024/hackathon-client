import { forwardRef } from 'react';

import styles from './styles.module.scss';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <button ref={ref} {...rest} className={clsx(styles.button, className)}>
            {children}
        </button>
    );
});

export { Button };
