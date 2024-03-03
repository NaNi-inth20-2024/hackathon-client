import { FC } from 'react';

import styles from './styles.module.scss';
import { HighLight } from '@/components/highlight/highlight';

type Props = {
    subjectName: string;
    taskName: string;
    deadlineDate: string;
};

const DeadlineReminderCard: FC<Props> = ({
    subjectName,
    taskName,
    deadlineDate,
}) => {
    return (
        <div className={styles.deadlineCard}>
            <div className={styles.deadlineCardSection}>
                Subject
                <HighLight text={subjectName} highlightColor={'#3bfdb0'} />
            </div>
            <div className={styles.deadlineCardSection}>
                Task
                <HighLight text={taskName} highlightColor={'#3bfdb0'} />
            </div>
            <div className={styles.deadlineCardSection}>
                Deadline
                <HighLight text={deadlineDate} highlightColor={'#3bfdb0'} />
            </div>
        </div>
    );
};

export { DeadlineReminderCard };
