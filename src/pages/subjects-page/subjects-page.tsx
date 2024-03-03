import { Button, Input } from '@/components';
import styles from '../subject-page/components/task-section/styles.module.scss';
import pageStyles from '../subject-page/styles.module.scss';
import { SubjectList } from './subject-list/subject-list';
import {
    useCreateSubjectMutation,
    useGetSubjectsQuery,
} from '@/lib/apis/subject-api';
import { Modal } from '@/components/modal/modal';
import { useState } from 'react';

const SubjectsPage = () => {
    const { data: subjects, isLoading, refetch } = useGetSubjectsQuery();
    const [createSubject] = useCreateSubjectMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddSubject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get('name') as string;
        const semester = +(formData.get('semester') as string);
        const year = +(formData.get('year') as string);

        await createSubject({ name, semester, year });
        setIsModalOpen(false);
        refetch();
    };

    return (
        <div className={pageStyles.subject_page}>
            <div className={styles.task_section}>
                <h2>Subjects</h2>
                <Button onClick={() => setIsModalOpen(true)}>
                    + Add subject
                </Button>
                {!isLoading && subjects?.length === 0 ? (
                    <p>No subjects</p>
                ) : (
                    <SubjectList
                        subjects={subjects || []}
                        className={styles.task_section__task_list}
                    />
                )}
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form
                    className={pageStyles.modal_form}
                    onSubmit={handleAddSubject}
                >
                    <h2>Add subject</h2>
                    <label>
                        Name
                        <Input
                            type="text"
                            placeholder="Subject name"
                            name="name"
                        />
                    </label>
                    <label>
                        Semester
                        <Input
                            type="number"
                            placeholder="Semester"
                            name="semester"
                        />
                    </label>
                    <label>
                        Year
                        <Input type="number" placeholder="Year" name="year" />
                    </label>

                    <Button type="submit">Add</Button>
                </form>
            </Modal>
        </div>
    );
};

export { SubjectsPage };
