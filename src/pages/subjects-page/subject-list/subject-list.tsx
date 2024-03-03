import { Subject } from '@/common/types';
import React from 'react';

import styles from '../../subject-page/components/task-list/styles.module.scss';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

type Properties = {
    subjects: Subject[];
    className?: string;
};

const SubjectList: React.FC<Properties> = ({ subjects, className }) => {
    return (
        <ul className={clsx(styles.task_list, className)}>
            {subjects.map((subject) => (
                <li key={subject.id}>
                    <div className={styles.task_list__item}>
                        <NavLink to={`/subjects/${subject.id}`}>
                            <h3>{subject.name}</h3>
                        </NavLink>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export { SubjectList };
