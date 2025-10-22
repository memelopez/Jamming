import React from 'react';
import styles from './searchBar.module.css';

function SearchBar(props) {
  const handleTextChangeSearchInput = event => props.handleTCinST(event.target.value);

  return (
    <div className={styles.searchBarContainer}>
      <form className={styles.songForm}>
        <input
          type="text"
          name="songSearchInput"
          id="songSearchInput"
          className={styles.songFormInput}
          placeholder="Search for song"
          value={props.searchText}
          onChange={handleTextChangeSearchInput}
        />
        <input type="submit" value="SEARCH" className={styles.songFormBtn}/>
      </form>
    </div>
  );
}

export default SearchBar;