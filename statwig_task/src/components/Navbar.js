import logo from '../Images/Logo.svg'
import styles from '../Styles/Navbar.module.css'
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navBar}>
          <img className={styles.navBarLogo} src={logo} alt="navbarLogo" />
          <div className={styles.navBarRight}>
            <Link className={styles.link_decor} to="/"><h5>Home</h5></Link>
            <h5>Category</h5>
            <h5>About</h5>
            <Link className={styles.link_decor} to="/contact"><h5>Contact</h5></Link>
            <Hamburger />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;