import { SearchPanel } from './components/search-panel/search-panel';

import styles from './styles.module.scss';

const StudentsPage: React.FC = () => {
    return (
        <div className={styles.students_page}>
            <SearchPanel />
        </div>
    );
};

export { StudentsPage };
