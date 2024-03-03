import { Task } from '@/common/types';
import styles from './styles.module.scss';
import { useState } from 'react';
import { Button } from '@/components';
import { useParams } from 'react-router-dom';
import { useGetTaskQuery } from '@/lib/apis/task-api';

const TaskDetails = () => {
    const params = useParams<{ taskId: string }>();
    const { data: task, isLoading } = useGetTaskQuery(Number(params.taskId));

    return (
        <div className={styles.task_details}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className={styles.task_details__info}>
                        <h2>{task!.title}</h2>
                        <p>{task!.description}</p>
                    </div>
                    <div className={styles.task_details__submissions}>
                        <div className={styles.task_details__submissions__info}>
                            <h3>Submissions</h3>
                            <p>No submissions yet</p>
                        </div>
                        <Button>+ Add files</Button>
                    </div>
                </>
            )}
        </div>
    );
};

export { TaskDetails };
