import { Button } from '@/components';
import { StudentList } from '../student-list/student-list';
import styles from '../task-section/styles.module.scss';
import {
    useAddUserToSubjectMutation,
    useGetSubjectUsersQuery,
} from '@/lib/apis/subject-api';
import { useParams } from 'react-router-dom';
import { Modal } from '@/components/modal/modal';
import { useGetUsersQuery } from '@/lib/apis/user-api';
import { useState } from 'react';

const StudentsSection: React.FC = () => {
    const params = useParams<{ id: string }>();

    const { data: users, isLoading } = useGetSubjectUsersQuery(+params.id!);
    const { data: allUsers, isLoading: isAllLoading } = useGetUsersQuery();

    const [addUserToSubject] = useAddUserToSubjectMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.task_section}>
            <h2>Users</h2>
            <Button onClick={() => setIsModalOpen(true)}>+ Add user</Button>
            {!isLoading && users?.length === 0 ? (
                <p>No tasks</p>
            ) : (
                <StudentList
                    users={users || []}
                    className={styles.task_section__task_list}
                />
            )}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Add user</h2>
                <ul>
                    {!isAllLoading &&
                        allUsers?.results.map((user) => (
                            <li key={user.id} className={styles.list_item}>
                                {user.first_name} {user.last_name}{' '}
                                <Button
                                    onClick={() =>
                                        addUserToSubject({
                                            userId: +user.id,
                                            subjectId: +params.id!,
                                        })
                                    }
                                >
                                    Add
                                </Button>
                            </li>
                        ))}
                </ul>
            </Modal>
        </div>
    );
};

export { StudentsSection };
