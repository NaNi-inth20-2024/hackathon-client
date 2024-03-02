import { NavMenu } from '@/components/nav-menu/nav-menu';
import { SubjectInfo } from './components/subject-info/subject-info';

import styles from './styles.module.scss';
import { Outlet } from 'react-router-dom';

const SubjectPage = () => {
    return (
        <div className={styles.subject_page}>
            <SubjectInfo
                subject={{ id: 1, name: 'Math', year: 2023, semester: 1 }}
            />
            <NavMenu
                links={[
                    { title: 'Info', path: '/subjects/1' },
                    { title: 'Tasks', path: '/subjects/1/tasks' },
                    { title: 'Grades', path: '/subjects/1/grades' },
                ]}
            />
            <Outlet />
        </div>
    );
};

export { SubjectPage };
