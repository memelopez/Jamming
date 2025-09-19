import React from 'react';
import styles from './searchResults.module.css';
import Tracklist from '../tracklist/Tracklist';
import Playlist from '../playlist/Playlist';

const SearchResults = (props) => {
  const handleTextChangePlaylistNameInput = (event) => props.handleTCinPN(event.target.value);

  return (
    <div className={styles.searchResultsContainer}>
      <div className={styles.forPlaylist}>
        <h2>Results</h2>
          <Tracklist
            tracks={props.tracklist}
          />
      </div>
      <div className={styles.forTracklist}>
        <form className={styles.savePlaylistForm}>
          <input
            type="text"
            name="playlistNameInput"
            id="playlistNameInput"
            className={styles.playlistNameInput}
            placeholder='Playlist Name'
            value={props.playlistNameInput}
            onChange={handleTextChangePlaylistNameInput}
          />
          <div className={styles.save2playlist}>
            <Playlist 
              tracks={props.playlist}
            />
          </div>
          <input type="submit" value="SAVE TO SPOTIFY" className={styles.savePlaylistBtn}/>
        </form>
      </div>
    </div>
  );
}

export default SearchResults;