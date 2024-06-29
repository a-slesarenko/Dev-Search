import styles from './Header.module.scss';
import { ThemeChanger } from 'components/ThemeChanger';

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>DevFinder</div>
    <ThemeChanger />
  </div>
);
