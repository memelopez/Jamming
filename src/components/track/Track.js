import React from 'react';
import styles from './track.module.css';

const Track = (props) => {
  return (
    <li className={styles.trackContainer}>
      <div className={styles.trackInfo}>
        <h3 className={styles.trackName}>{props.songName}</h3>
        <p className={styles.trackArtistAlbum}>{`${props.songArtist} | ${props.songAlbum}`}</p>
      </div>
      <div className={styles.addDeleteBtn}></div>
    </li>
  );
}

export default Track;