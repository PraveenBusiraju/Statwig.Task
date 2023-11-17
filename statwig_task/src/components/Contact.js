import Navbar from './Navbar';
import styles from '../Styles/contact.module.css'
import Logo1 from '../Images/Showcase-mobile.png'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className={styles.formContainer}>
        <form>
          <div class="form-group" className={styles.forms}>
            <label for="exampleInputEmail1">Name</label>
            <input type="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name.." />
          </div>
          <div class="form-group" className={styles.forms}>
            <label for="exampleInputPassword1">Email</label>
            <input type="Email" class="form-control" id="exampleInputPassword1" placeholder="Enter Email.." />
          </div>
          <div class="form-group" className={styles.forms}>
            <label for="exampleFormControlTextarea1">We'd love to here from you..</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className={styles.b} type="submit">Submit</button>
        </form>
        <img className={styles.img_form} src={Logo1} alt='img'></img>
      </div>

    </>
  )
}