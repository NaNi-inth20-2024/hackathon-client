import { FC } from 'react';
import { ProgressCircle } from '@/components';
import { OneLineDataRecord } from './components/one-line-data-record/one-line-data-record';

import styles from './styles.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { DeadlineReminderCard } from './components/deadline-reminder-card/deadline-reminder-card';
import { useAppSelector } from '@/lib/store/hooks';
import { useGetUserStatisticsQuery } from '@/lib/apis/users-api';

const StudentProfile: FC = () => {
    const userData = useAppSelector((state) => state.user.user);
    const { data: statsData } = useGetUserStatisticsQuery();

    return (
        <div className={styles.studentProfile}>
            <div className={styles.studentData}>
                <div className={styles.studentDataSection}>
                    <OneLineDataRecord
                        content={'Name:'}
                        contentToHighlight={
                            userData?.first_name
                                ? `${userData?.first_name} ${userData?.last_name}`
                                : 'unknown'
                        }
                    />
                    <OneLineDataRecord
                        content={'Email:'}
                        contentToHighlight={userData?.email ?? 'unknown'}
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
                            value={statsData?.average_grade ?? 0}
                            progressText={`${statsData?.average_grade ?? 0}%`}
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
                            value={statsData?.completed_tasks_ratio ?? 0}
                            progressText={`${statsData?.completed_tasks_ratio ?? 0}%`}
                            progressDescription={`Average quantity of homeworks accomplished across all disciplines`}
                        />
                    </div>
                    <div className={styles.progressCircle}>
                        <ProgressCircle
                            value={statsData?.completed_subject_ratio ?? 0}
                            progressText={`${statsData?.completed_subject_ratio ?? 0}%`}
                            progressDescription={`Your progress in accomplishing (finishing all tasks) all disciplines`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
