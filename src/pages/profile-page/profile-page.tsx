import { FC } from 'react';

import styles from './styles.module.scss';
import StudentProfile from './components/student-profile/student-profile';

const ProfilePage: FC = () => {
    return (
        <div className={styles.profilePage}>
            <StudentProfile />
        </div>
    );
};
export { ProfilePage };
