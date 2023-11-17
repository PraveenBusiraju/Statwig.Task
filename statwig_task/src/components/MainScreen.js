import styles from '../Styles/MainScreen.module.css'
import viewIntro from '../Images/view-into.svg'
import showCase from '../Images/Showcase.png'
import showCase2 from '../Images/Showcase-mobile.png'



function MainScreen() {
  return (
    <>
      <div className={styles.main_container}>

        <div className={styles.left_side}>
          <div className={styles.left_part1}>
            <h2>One More Friend</h2>
            <h3>Thousands More Fun!</h3>
          </div>

          <div className={styles.left_part2}>
            <span className={styles.mobile}>Having a pet means you have more joy, a new friend, a <br></br>happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</span>
            <span className={styles.laptop}>Having a pet means you have more joy, a new friend, a <br></br>happy person who will always be with you to have fun. We <br></br> have 200+ different pets that can meet your needs!</span>
          </div>

          <div className={styles.left_part3}>
            <img className={styles.view_intro} src={viewIntro} alt='view intro' />
            <button className={styles.explore_btn}>Explore Now</button>
          </div>

        </div>

        <div className={styles.right_side}>
          <img src={showCase} alt='show case' />
        </div>
        <img class={styles.showCaseMobile} src={showCase2} alt='img'></img>
      </div>


    </>
  )
}

export default MainScreen;