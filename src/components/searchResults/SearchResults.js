import React from 'react';
import styles from './searchResults.module.css';

const SearchResults = () => {
  return (
    <div className={styles.searchResultsContainer}>
      <div className={styles.forPlaylist}></div>
      <div className={styles.forTracklist}></div>
    </div>
  );
}

export default SearchResults;