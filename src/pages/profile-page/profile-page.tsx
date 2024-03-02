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
// Середній бал за роботи
// Середня кількість виконаних завдань по дисциплінах
// Відсоток закритих дисциплін
// Середній відсоток вчасно зданих робіт
// Дані: час семестру, скільки пройшло, якщо багато завдань не зроблено - ПОКВАПСЯ, БЛЯТЬ!
// нотіфікейшени по роботам на тиждень
// По якому завданню найближчий дедлайн
// Студент може позначати таск як зданий, але не перевірений
export default ProfilePage;
