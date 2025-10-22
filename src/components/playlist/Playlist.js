import React from 'react';
import styles from './playlist.module.css';
import Track from '../track/Track';

const Playlist = (props) => {
  return (
    <ul className={styles.playList}>
      {props.tracks.map((track) => (
        <Track
          key={track.id}
          id={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
          addOrDeleteSign={false}
        />
      ))}
    </ul>
  );
};

export default Playlist;