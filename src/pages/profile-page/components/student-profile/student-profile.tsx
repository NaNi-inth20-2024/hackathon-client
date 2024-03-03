import { FC } from 'react';
import { ProgressCircle } from '@/components';
import { OneLineDataRecord } from './components/one-line-data-record/one-line-data-record';

import styles from './styles.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { DeadlineReminderCard } from './components/deadline-reminder-card/deadline-reminder-card';
import { useAppSelector } from '@/lib/store/hooks';

const StudentProfile: FC = () => {
    const userData = useAppSelector((state) => state.user.user);

    return (
        <div className={styles.studentProfile}>
            <div className={styles.studentData}>
                <div className={styles.studentDataSection}>
                    <OneLineDataRecord
                        content={'Name:'}
                        contentToHighlight={`${userData?.first_name} ${userData?.last_name}`}
                    />
                    <OneLineDataRecord
                        content={'Email:'}
                        contentToHighlight={userData?.email}
                    />
                </div>
                <div className={styles.studentDataSection}>
                    <b>Your subjects and current marks</b>
                    <ul className={styles.subjectsList}>
                        <li>
                            <OneLineDataRecord
                                content={'Math'}
                                contentToHighlight={'69'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'English'}
                                contentToHighlight={'98'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Theory of algorithms'}
                                contentToHighlight={'78'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Math'}
                                contentToHighlight={'69'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'English'}
                                contentToHighlight={'98'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Theory of algorithms'}
                                contentToHighlight={'78'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Math'}
                                contentToHighlight={'69'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'English'}
                                contentToHighlight={'98'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Theory of algorithms'}
                                contentToHighlight={'78'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Math'}
                                contentToHighlight={'69'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'English'}
                                contentToHighlight={'98'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Theory of algorithms'}
                                contentToHighlight={'78'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Math'}
                                contentToHighlight={'69'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'English'}
                                contentToHighlight={'98'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Theory of algorithms'}
                                contentToHighlight={'78'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Math'}
                                contentToHighlight={'69'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'English'}
                                contentToHighlight={'98'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Theory of algorithms'}
                                contentToHighlight={'78'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Math'}
                                contentToHighlight={'69'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'English'}
                                contentToHighlight={'98'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Theory of algorithms'}
                                contentToHighlight={'78'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Math'}
                                contentToHighlight={'69'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'English'}
                                contentToHighlight={'98'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Theory of algorithms'}
                                contentToHighlight={'78'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Math'}
                                contentToHighlight={'69'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'English'}
                                contentToHighlight={'98'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Theory of algorithms'}
                                contentToHighlight={'78'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Math'}
                                contentToHighlight={'69'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'English'}
                                contentToHighlight={'98'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Theory of algorithms'}
                                contentToHighlight={'78'}
                            />
                        </li>
                    </ul>
                    <div className={styles.progressCircle}>
                        <ProgressCircle
                            value={75}
                            progressText={`${75}%`}
                            progressDescription={`Your average grade`}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.statsAndDeadlines}>
                <div className={styles.closestDeadlines}>
                    <div className={styles.studentDataSection}>
                        <b>Subjects and tasks closest deadlines</b>
                        <ul className={styles.studentsDataSectionItemsList}>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Math'}
                                    taskName={
                                        'Regression model of Houses in California'
                                    }
                                    deadlineDate={'24.03.2024'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'English'}
                                    taskName={'Essay'}
                                    deadlineDate={'08.03.2024'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Computer Vision'}
                                    taskName={'Rotate a triangle'}
                                    deadlineDate={'14.03.2024'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Backend basics'}
                                    taskName={'Write Microservices on PHP'}
                                    deadlineDate={'Never'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Math'}
                                    taskName={
                                        'Regression model of Houses in California'
                                    }
                                    deadlineDate={'24.03.2024'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'English'}
                                    taskName={'Essay'}
                                    deadlineDate={'08.03.2024'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Computer Vision'}
                                    taskName={'Rotate a triangle'}
                                    deadlineDate={'14.03.2024'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Backend basics'}
                                    taskName={'Write Microservices on PHP'}
                                    deadlineDate={'Never'}
                                />
                            </li>

                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Math'}
                                    taskName={
                                        'Regression model of Houses in California'
                                    }
                                    deadlineDate={'24.03.2024'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'English'}
                                    taskName={'Essay'}
                                    deadlineDate={'08.03.2024'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Computer Vision'}
                                    taskName={'Rotate a triangle'}
                                    deadlineDate={'14.03.2024'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Backend basics'}
                                    taskName={'Write Microservices on PHP'}
                                    deadlineDate={'Never'}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.studentStatistics}>
                    <div className={styles.progressCircle}>
                        <ProgressCircle
                            value={10}
                            progressText={`${10}%`}
                            progressDescription={`Average quantity of homeworks accomplished across all disciplines`}
                        />
                    </div>
                    <div className={styles.progressCircle}>
                        <ProgressCircle
                            value={64}
                            progressText={`${64}%`}
                            progressDescription={`Your progress in accomplishing all tasks up to this date`}
                        />
                    </div>
                    <div className={styles.progressCircle}>
                        <ProgressCircle
                            value={80}
                            progressText={`${80}%`}
                            progressDescription={`Your progress in passing all tasks up to this date`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
