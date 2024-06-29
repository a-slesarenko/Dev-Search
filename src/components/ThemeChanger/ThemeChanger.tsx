import { useEffect, useState } from 'react';
import {ReactComponent as SunIcon }from 'assets/icon-sun.svg';
import {ReactComponent as MoonIcon} from 'assets/icon-moon.svg';
import styles from './ThemeChanger.module.scss';

export const ThemeChanger = () => {
  const [isDark, setIsDark] = useState(false);
  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(
  () => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark]);

  return  (
      <div className={styles.ThemeChanger} onClick={() => setIsDark(!isDark)} >
        <span>{themeText}</span>
        <ThemeIcon className={styles.icon} />
      </div>
  )
}
