import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import clsx from 'clsx';

type Properties = {
    links: {
        title: string;
        path: string;
    }[];
};

const NavMenu: React.FC<Properties> = ({ links }) => {
    const location = useLocation();

    return (
        <ul className={styles.nav_menu}>
            {links.map((link) => (
                <li
                    key={link.path}
                    className={clsx(
                        styles.nav_menu__item,
                        location.pathname === link.path &&
                            styles.nav_menu__item_active,
                    )}
                >
                    <NavLink to={link.path}>{link.title}</NavLink>
                </li>
            ))}
        </ul>
    );
};

export { NavMenu };
