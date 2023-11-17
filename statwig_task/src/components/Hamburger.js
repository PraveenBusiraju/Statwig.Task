import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from '../Styles/Navbar.module.css'
import Hamburger_logo from '../Images/Hamburger Menu.svg'
import { Link } from 'react-router-dom';

function Hamburger() {
  return (
    <>

      <div className={styles.Hamburger_logo}>
        <Dropdown>

          <Dropdown.Toggle variant="" id="dropdown-basic">
            <img src={Hamburger_logo} alt='hamburger'></img>
          </Dropdown.Toggle>


          <Dropdown.Menu>
            <Dropdown.Item ><Link to="/" style={{ color: 'black', textDecoration: 'none' }} >Home</Link></Dropdown.Item>
            <Dropdown.Item href="#">Category</Dropdown.Item>
            <Dropdown.Item href="#">About</Dropdown.Item>
            <Dropdown.Item ><Link to="/contact" style={{ color: 'black', textDecoration: 'none' }} >Contact</Link></Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default Hamburger;
