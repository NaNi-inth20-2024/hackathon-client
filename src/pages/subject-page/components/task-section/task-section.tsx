import { Task } from '@/common/types';
import { TaskList } from '../task-list/task-list';
import { useState } from 'react';

import styles from './styles.module.scss';
import { Button } from '@/components';

const TaskSection: React.FC = () => {
    const [tasks] = useState<Task[]>([
        {
            id: 1,
            title: 'Task 1',
            description: 'Task 1 description',
        },
        {
            id: 2,
            title: 'Task 2',
            description: 'Task 2 description',
        },
    ]);

    return (
        <div className={styles.task_section}>
            <h2>Tasks</h2>
            <Button>+ New task</Button>
            <TaskList
                tasks={tasks}
                className={styles.task_section__task_list}
            />
        </div>
    );
};

export { TaskSection };
