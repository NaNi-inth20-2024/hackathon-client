import { Task } from '@/common/types';
import React from 'react';

import styles from './styles.module.scss';
import clsx from 'clsx';
import { NavLink, useParams } from 'react-router-dom';

type Properties = {
    tasks: Task[];
    className?: string;
};

const TaskList: React.FC<Properties> = ({ tasks, className }) => {
    const params = useParams<{ id: string }>();

    return (
        <ul className={clsx(styles.task_list, className)}>
            {tasks.map((task) => (
                <li key={task.id}>
                    <div className={styles.task_list__item}>
                        <NavLink to={`/subjects/${params.id}/tasks/${task.id}`}>
                            <h3>{task.title}</h3>
                        </NavLink>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export { TaskList };
