import { NavMenu } from '@/components/nav-menu/nav-menu';
import { SubjectInfo } from './components/subject-info/subject-info';

import styles from './styles.module.scss';
import { Outlet, useParams } from 'react-router-dom';
import { useGetSubjectQuery } from '@/lib/apis/subject-api';

const SubjectPage = () => {
    const params = useParams<{ id: string }>();

    const { data: subject, isLoading } = useGetSubjectQuery(+params.id!);

    return (
        <div className={styles.subject_page}>
            {!isLoading && <SubjectInfo subject={subject!} />}
            <NavMenu
                links={[
                    { title: 'Tasks', path: `/subjects/${params.id}/tasks` },
                    { title: 'Grades', path: `/subjects/${params.id}/grades` },
                ]}
            />
            <Outlet />
        </div>
    );
};

export { SubjectPage };
