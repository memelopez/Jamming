import React from 'react';
import styles from './searchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <form className={styles.songForm}>
        <input type="text" name="songSearchInput" id="songSearchInput" className={styles.songFormInput} placeholder="Search for song"/>
        <input type="submit" value="SEARCH" className={styles.songFormBtn}/>
      </form>
    </div>
  );
}

export default SearchBar;