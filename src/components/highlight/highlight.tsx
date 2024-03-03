import { FC } from 'react';

type Props = {
    text: string;
    highlightColor: string;
};

const HighLight: FC<Props> = ({ text, highlightColor }) => {
    return (
        text && (
            <label style={{ background: highlightColor, borderRadius: '10px' }}>
                {text}
            </label>
        )
    );
};

export { HighLight };
