
import Navbar from "./Navbar"
import styles from "./Contact.module.css"
const Contact = ()=>{

    return(
        <>
        <Navbar/>
         <div className={styles.contact}>
    <h2>Contact Me</h2>

    <input type="text"  className= {styles.input}placeholder="Name"></input>  <br></br> <br></br>

    <input type="email" className={styles.email} placeholder="@gmail.com"></input>  <br></br> <br></br>

    <textarea cols={10} rows={10}  className={styles.emails} placeholder="Kindly send me a Message" maxLength={800} >   </textarea>  <br></br> <br></br>

    <button className={styles.button}>Submit</button>


</div>
        </>
    )
}

export default Contact