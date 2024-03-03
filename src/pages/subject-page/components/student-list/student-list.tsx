import { User } from '@/common/types';

import styles from '../task-list/styles.module.scss';
import clsx from 'clsx';

type Properties = {
    users: User[];
    className?: string;
};

const StudentList: React.FC<Properties> = ({ users, className }) => {
    return (
        <ul className={clsx(styles.task_list, className)}>
            {users.map((user) => (
                <li key={user.id} className={styles.task_list__item}>
                    {user.first_name} {user.last_name}
                </li>
            ))}
        </ul>
    );
};

export { StudentList };
