import { Task } from '@/common/types';
import styles from './styles.module.scss';
import { useState } from 'react';
import { Button } from '@/components';

const TaskDetails = () => {
    const [task] = useState<Task>({
        id: 1,
        title: 'Task 1',
        description: 'Task 1 description',
    });

    return (
        <div className={styles.task_details}>
            <div className={styles.task_details__info}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
            <div className={styles.task_details__submissions}>
                <div className={styles.task_details__submissions__info}>
                    <h3>Submissions</h3>
                    <p>No submissions yet</p>
                </div>
                <Button>+ Add files</Button>
            </div>
        </div>
    );
};

export { TaskDetails };
