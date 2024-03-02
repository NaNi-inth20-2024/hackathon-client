import { TaskList } from '../task-list/task-list';

import styles from './styles.module.scss';
import { Button } from '@/components';
import { useGetSubjectTasksQuery } from '@/lib/apis/subject-api';
import { useParams } from 'react-router-dom';

const TaskSection: React.FC = () => {
    const params = useParams<{ id: string }>();
    const { data: tasks, isLoading } = useGetSubjectTasksQuery(+params.id!);

    return (
        <div className={styles.task_section}>
            <h2>Tasks</h2>
            <Button>+ New task</Button>
            {!isLoading && tasks?.length === 0 ? (
                <p>No tasks</p>
            ) : (
                <TaskList
                    tasks={tasks || []}
                    className={styles.task_section__task_list}
                />
            )}
        </div>
    );
};

export { TaskSection };
