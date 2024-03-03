import { Subject } from '@/common/types';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Properties = {
    subject: Subject;
    className?: string;
};

const SubjectInfo: React.FC<Properties> = ({ subject, className }) => {
    return (
        <div className={clsx(styles.subject_info, className)}>
            <h1>{subject.name}</h1>
            <p>
                {subject.year} - {subject.semester} semester
            </p>
            <p>
                Teacher: {subject.teachers[0].first_name}{' '}
                {subject.teachers[0].last_name}
            </p>
        </div>
    );
};

export { SubjectInfo };
