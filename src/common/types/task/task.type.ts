import { Grade } from '../grade/grade.type';

type Task = {
    id: number;
    deadline: Date;
    title: string;
    description: string;
    is_finished: boolean;
    max_points: number;
    grade?: Grade;
};

export { type Task };
