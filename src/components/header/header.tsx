import { FC, useState } from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import { Link, useLocation } from 'react-router-dom';

import styles from './styles.module.scss';
import HeaderMenu from './components/header-menu/header-menu';

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const userData = useAppSelector((state) => state.user.user);
    const path = useLocation().pathname;

    const handleLogout = () => {
        localStorage.clear();
    };

    return (
        <div className={styles.header}>
            <h1 className={styles.header__textLogo}>
                <Link to="/">Scholaster</Link>
            </h1>
            {userData?.first_name ? (
                <div className={styles.header__userData}>
                    <>
                        <svg
                            className={styles.bars}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>

                        <div className={styles.header__menuContainer}>
                            <HeaderMenu
                                visible={isMenuOpen}
                                username={`${userData?.first_name} ${userData?.last_name}`}
                                onLogout={handleLogout}
                                onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                        </div>
                    </>
                </div>
            ) : path === '/login' ? null : (
                <Link to={'/login'}>{'Log in'}</Link>
            )}
        </div>
    );
};

export { Header };
