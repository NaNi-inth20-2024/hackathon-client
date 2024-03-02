import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
    content: string;
    contentToHighlight?: string;
};

const OneLineDataRecord: FC<Props> = ({ content, contentToHighlight }) => {
    return (
        <div className={styles.line}>
            <p className={styles.content}>{content}</p>
            {contentToHighlight && (
                <p className={styles.highlight}>{contentToHighlight}</p>
            )}
        </div>
    );
};

export { OneLineDataRecord };
