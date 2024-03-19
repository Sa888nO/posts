import styles from './navigation.module.less';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import routes from '../../routes/routes';

const Navigation = () => {
    const location = useLocation();
    return (
        <nav className={styles.nav}>
            <Link
                to={routes.posts}
                className={classnames({
                    [styles.linkActive]: location.pathname === routes.posts,
                })}>
                Посты
            </Link>
            <Link
                to={routes.createPosts}
                className={classnames({
                    [styles.linkActive]:
                        location.pathname === routes.createPosts,
                })}>
                Создать новый пост
            </Link>
        </nav>
    );
};

export default Navigation;
