import React from 'react';
import styles from './searchResults.module.css';

const SearchResults = () => {
  return (
    <div className={styles.searchResultsContainer}>
      <div className={styles.forPlaylist}>
        <h2>Results</h2>
      </div>
      <div className={styles.forTracklist}>
        <form className={styles.savePlaylistForm}>
          <input type="text" name="playlistNameInput" id="playlistNameInput" className={styles.playlistNameInput} placeholder='Playlist Name'/>
          <div className={styles.save2playlist}>
          </div>
          <input type="submit" value="SAVE TO SPOTIFY" className={styles.savePlaylistBtn}/>
        </form>
      </div>
    </div>
  );
}

export default SearchResults;