import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from './actions';
import CardComponent from './cardComponent';
import styles from '../Styles/CardComponent.module.css'
// debugger
const ApiComponent = () => {
  const dispatch = useDispatch();
  const selectedApi = useSelector((state) => state.selectedApi);
  const items = useSelector((state) => state.items);

  const fetchData = async (apiUrl) => {
    try {
      const response = await axios.get(apiUrl);
      dispatch(setItems(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (selectedApi) {
      const apiUrls = {
        All: 'https://takehome.statledger.io/api/v1/all',
        Dogs: 'https://takehome.statledger.io/api/v1/dogs',
        Cats: 'https://takehome.statledger.io/api/v1/cats',
      };

      fetchData(apiUrls[selectedApi]);
    }
  }, [selectedApi]);

  return (
    <div>
      <div className={styles.gride}>
        {items.map((item, index) => (
          <CardComponent key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ApiComponent;


