import React from 'react';
import styles from './searchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <form className={styles.songForm}>
        <input type="text" name="songSearchInput" id="songSearchInput" className={styles.songFormInput}/>
        <input type="submit" value="Search" className={styles.songFormBtn}/>
      </form>
    </div>
  );
}

export default SearchBar;