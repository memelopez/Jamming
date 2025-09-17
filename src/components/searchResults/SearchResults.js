import React from 'react';
import styles from './searchResults.module.css';
import Tracklist from '../tracklist/Tracklist';

const tracklistHC = [
  {
    name: 'First Date',
    artist: 'Blink 182',
    album: 'Take Off Your Pants and Jacket'
  },
  {
    name: 'Hey Ya!',
    artist: 'Outkast',
    album: 'Speakerboxxx/The Love Below'
  },
  {
    name: 'All Star',
    artist: 'Smashmouth',
    album: 'Astro Lounge'
  },
];

const SearchResults = () => {
  return (
    <div className={styles.searchResultsContainer}>
      <div className={styles.forPlaylist}>
        <h2>Results</h2>
          <Tracklist
            tracks={tracklistHC}
          />
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