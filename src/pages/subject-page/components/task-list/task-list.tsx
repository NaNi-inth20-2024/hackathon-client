import { Task } from '@/common/types';
import React from 'react';

import styles from './styles.module.scss';
import clsx from 'clsx';

type Properties = {
    tasks: Task[];
    className?: string;
};

const TaskList: React.FC<Properties> = ({ tasks, className }) => {
    return (
        <ul className={clsx(styles.task_list, className)}>
            {tasks.map((task) => (
                <li key={task.id}>
                    <div className={styles.task_list__item}>
                        <h3>{task.title}</h3>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export { TaskList };
