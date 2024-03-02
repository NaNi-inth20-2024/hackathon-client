import { FC } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import styles from './styles.module.scss';
import 'react-circular-progressbar/dist/styles.css';

const StudentProfile: FC = () => {
    return (
        <div className={styles.studentProfile}>
            <div className={styles.studentData}>
                <p>Bebra Bebrakovsky</p>
                <p>ababababba@gmail.com</p>
                <p>age: 37</p>
            </div>
            <div className={styles.studentStatistics}>
                <CircularProgressbar value={80} text={`${80}%`} />
                <CircularProgressbar value={70} text={`${70}%`} />
                <CircularProgressbar value={37} text={`${37}%`} />
                <CircularProgressbar value={95} text={`${95}%`} />
            </div>
        </div>
    );
};

export default StudentProfile;
