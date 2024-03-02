import { FC } from 'react';
import { ProgressCircle } from '@/components';
import { OneLineDataRecord } from './components/one-line-data-record/one-line-data-record';

import styles from './styles.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { DeadlineReminderCard } from './components/deadline-reminder-card/deadline-reminder-card';

const StudentProfile: FC = () => {
    return (
        <div className={styles.studentProfile}>
            <div className={styles.studentData}>
                <div className={styles.studentDataSection}>
                    <OneLineDataRecord
                        content={'Name:'}
                        contentToHighlight={'Bebra Bebrakovsky'}
                    />
                    <OneLineDataRecord
                        content={'Email:'}
                        contentToHighlight={'ababababba@gmail.com'}
                    />
                    <OneLineDataRecord
                        content={'Age:'}
                        contentToHighlight={'37'}
                    />
                </div>
                <div className={styles.studentDataSection}>
                    <b>Your subjects and current marks</b>
                    <ul className={styles.subjectsList}>
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>{' '}
                        <li>
                            <OneLineDataRecord
                                content={'Ukr move'}
                                contentToHighlight={'67'}
                            />
                        </li>
                    </ul>
                    <div className={styles.progressCircle}>
                        <div className={styles.progressCircle}>
                            <ProgressCircle
                                value={75}
                                progressText={`${75}%`}
                                progressDescription={`Your average grade`}
                            />
                        </div>
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
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>{' '}
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>{' '}
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>{' '}
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>{' '}
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>{' '}
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>{' '}
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>{' '}
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
                                />
                            </li>
                            <li className={styles.deadlineCard}>
                                <DeadlineReminderCard
                                    subjectName={'Subject name'}
                                    taskName={'Task name'}
                                    deadlineDate={'Date'}
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
