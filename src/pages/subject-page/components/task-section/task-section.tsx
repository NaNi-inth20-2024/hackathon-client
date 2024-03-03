import { TaskList } from '../task-list/task-list';

import styles from './styles.module.scss';
import { Button, Input } from '@/components';
import { Modal } from '@/components/modal/modal';
import {
    useAddTaskMutation,
    useGetSubjectTasksQuery,
} from '@/lib/apis/subject-api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskSection: React.FC = () => {
    const params = useParams<{ id: string }>();
    const { data: tasks, isLoading } = useGetSubjectTasksQuery(+params.id!);
    const [addTask] = useAddTaskMutation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const deadline = formData.get('deadline') as string;
        const maxPoints = +(formData.get('maxPoints') as string);

        await addTask({
            subjectId: +params.id!,
            task: { title, description, deadline, max_points: +maxPoints },
        });
        setIsModalOpen(false);
    };

    return (
        <div className={styles.task_section}>
            <h2>Tasks</h2>
            <Button onClick={() => setIsModalOpen(true)}>+ New task</Button>
            {!isLoading && tasks?.length === 0 ? (
                <p>No tasks</p>
            ) : (
                <TaskList
                    tasks={tasks || []}
                    className={styles.task_section__task_list}
                />
            )}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form className={styles.modal_form} onSubmit={handleAddTask}>
                    <h2>Add task</h2>
                    <label>
                        Title
                        <Input
                            type="text"
                            placeholder="Task title"
                            name="title"
                        />
                    </label>
                    <label>
                        Description
                        <textarea
                            placeholder="Task description"
                            name="description"
                        />
                    </label>
                    <label>
                        Deadline
                        <Input type="date" name="deadline" />
                    </label>
                    <label>
                        Max points
                        <Input type="number" name="maxPoints" />
                    </label>
                    <Button type="submit">Add</Button>
                </form>
            </Modal>
        </div>
    );
};

export { TaskSection };
