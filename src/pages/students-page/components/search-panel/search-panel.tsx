import { Input } from '@/components';
import Select from 'react-select';
import { useCallback, useState } from 'react';

import styles from './styles.module.scss';
import { colorStyles as selectStyles } from '@/common/constants';

const SearchPanel: React.FC = () => {
    const [search, setSearch] = useState('');
    const [, setSelectedGroup] = useState<string | null>(null);
    const groups = ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5'];

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
        },
        [],
    );

    const handleGroupChange = useCallback((option: string | null) => {
        setSelectedGroup(option);
        console.log(option);
    }, []);
    return (
        <div className={styles.search_panel}>
            <Input
                value={search}
                onChange={handleSearch}
                placeholder="Search"
            />
            <Select
                options={groups.map((group) => ({
                    label: group,
                    value: group,
                }))}
                placeholder="Group"
                styles={selectStyles}
                onChange={(option: unknown) =>
                    handleGroupChange(
                        (option as { label: string; value: string }).value,
                    )
                }
            />
        </div>
    );
};

export { SearchPanel };
