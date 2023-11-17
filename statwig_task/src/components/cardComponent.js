
import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from '../Styles/CardComponent.module.css';

const CardComponent = ({ data }) => {
  return (
    <div className={styles.card}>
      <Card >
        <Card.Img variant="top" src={data.image} className={styles.card_img} />
        <Card.Body>
          <Card.Title>
            <span className={styles.cardTitle}> {data.name}</span>
          </Card.Title>

          <div className={styles.card_details}>
            <Card.Text>
              <span className={styles.cardText}> Gene: <b>{data.gender}</b></span>
            </Card.Text>
            <Card.Text>
              <span className={styles.cardText}> Age: <b>{data.ageMonths} months</b> </span>
            </Card.Text>
          </div>

          <Card.Title>
            <span className={styles.cardTitle}>{data.price}.00 VND  </span></Card.Title>
        </Card.Body>
      </Card>
    </div>

  );
};

export default CardComponent;

