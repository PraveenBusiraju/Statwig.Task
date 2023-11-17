import styles from '../Styles/Footer.module.css'
import facebookLogo from '../Images/Facebook.svg'
import twitterLogo from '../Images/Twitter.svg'
import instagramLogo from '../Images/Instagram.svg'
import youtubeLogo from '../Images/YouTube.svg'
import Logo from '../Images/Logo.svg'
function Footer(){
  return(
    <>
    <div className={styles.footer}>
      <div className={styles.firstPart}>
        <div className={styles.firstPartLeft}>
        <h6>Home</h6>
        <h6>Category</h6>
        <h6>About</h6>
        <h6>Contact</h6>
        </div>
        
        <div className={styles.firstPartRight}>
          <img src={facebookLogo} alt='facebookLogo'/>
           <img src={twitterLogo} alt='twitterLogo'/>
          <img src={instagramLogo} alt='instagramLogo'/>
          <img src={youtubeLogo} alt='youtubeLogo'/> 
        </div>
      </div>

      <hr className={styles.Line}></hr>

      <div className={styles.secondPart}>
        <span>2023 Monito. All rights reserved.</span>

        <div className={styles.logoContainer}>
          <img src={Logo} alt='Logo'/>
        </div>

        <div className={styles.secondPartRight}>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>

      </div>

    </div>

    </>
  )
}

export default Footer