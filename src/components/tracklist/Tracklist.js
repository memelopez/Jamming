import React from 'react';
import styles from './tracklist.module.css';
import Track from '../track/Track';

const Tracklist = (props) => {
  return (
    <ul className={styles.trackList}>
      {props.tracks.map((track) => (
        <Track
          key={track.id}
          id={track.id}
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