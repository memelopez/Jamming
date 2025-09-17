import React from 'react';
import styles from './track.module.css';
// fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

const Track = (props) => {
  return (
    <li className={styles.trackContainer}>
      <div className={styles.trackInfo}>
        <h3 className={styles.trackName}>{props.name}</h3>
        <p className={styles.trackArtistAlbum}>{`${props.artist} -||- ${props.album}`}</p>
      </div>
      <div className={styles.addDeleteBtnContainer}>
        <button aria-label={`${props.addOrDeleteSign?'Add':'Delete'} song`} className={styles.addDeleteBtn}>
          {props.addOrDeleteSign ? <FontAwesomeIcon icon="fa-solid fa-plus" /> : <FontAwesomeIcon icon="fa-solid fa-minus" />}
        </button>
      </div>
    </li>
  );
}

export default Track;