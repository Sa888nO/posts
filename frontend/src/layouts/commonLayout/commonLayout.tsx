import { Outlet } from 'react-router-dom';
import styles from './commonLayout.module.less';
import Navigation from '../../modules/navigation/navigation';

const CommonLayout = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Navigation />
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default CommonLayout;
