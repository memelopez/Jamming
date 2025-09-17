import React from 'react';
import styles from './searchResults.module.css';
import Track from '../track/Track';

const track1 = {
  songName: 'First Date',
  songArtist: 'Blink 182',
  songAlbum: 'Take Off Your Pants and Jacket'
};

const SearchResults = () => {
  return (
    <div className={styles.searchResultsContainer}>
      <div className={styles.forPlaylist}>
        <h2>Results</h2>
          <ul>
            <Track 
              songName={track1.songName}
              songArtist={track1.songArtist}
              songAlbum={track1.songAlbum}
            />
          </ul>
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