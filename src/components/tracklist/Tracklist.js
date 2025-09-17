import React from 'react';
import styles from './tracklist.module.css';
import Track from '../track/Track';

const Tracklist = (props) => {
  return (
    <ul className={styles.trackList}>
      {props.tracks.map((track) => (
        <Track 
          name={track.name}
          artist={track.artist}
          album={track.album}
          addOrDeleteSign={true}
        />
      ))}
    </ul>
  );
}

export default Tracklist;