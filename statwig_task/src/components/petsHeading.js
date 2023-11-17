
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedApi } from './actions';
import ApiComponent from './ApiComponent';
import styles from '../Styles/petsHeading.module.css';
// debugger
export default function PetsHeading() {
  const dispatch = useDispatch();

  const handleApiButtonClick = (api) => {
    dispatch(setSelectedApi(api));
  };

  return (
    <>
      <div className={styles.pets_container}>
        <div className={styles.pets_heading}>
          <h6>What's new?</h6>
          <h4>Take a look at some of our pets</h4>
        </div>

        <div className={styles.pets_btns}>
          <button onClick={() => handleApiButtonClick('All')}>All</button>
          <button onClick={() => handleApiButtonClick('Dogs')}>Dogs</button>
          <button onClick={() => handleApiButtonClick('Cats')}>Cats</button>
        </div>
      </div>
      <ApiComponent />
    </>

  );
}

