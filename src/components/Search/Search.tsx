import {ReactComponent as IconSearch} from 'assets/icon-search.svg';
import styles from './Search.module.scss';

interface SearchProps { 
  hasError: boolean,
  onSubmit: (text: string) => void,
}

type formFields = {
  username: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & formFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;
    if(text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  }

  return(
  <form onSubmit={handleSubmit}>
    <div className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        <IconSearch />
      </label>
      <input type="text"
      className={styles.textField}
      id="search"
      name='username'
      placeholder='Search gitHub username...' />
      {hasError && (
        <div className={styles.error}>
          No result
        </div>
      )}
      <input type='submit' className={styles.button} value="Search" />
    </div>
  </form>
  )
}
