import { forwardRef } from 'react';

const Radio = forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
    return <input type="radio" {...props} ref={ref} />;
});

export { Radio };
