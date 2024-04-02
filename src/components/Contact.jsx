
import Navbar from "./Navbar"
import styles from "./Contact.module.css"
const Contact = ()=>{

    return(
        <>
        <Navbar/>
         <div className={styles.contact}>
    <h2>Contact Me</h2>

    <input type="text" placeholder="Name"></input>  <br></br> <br></br>

    <input type="email" placeholder="@gmail.com"></input>  <br></br> <br></br>

    <textarea cols={10} rows={10}  placeholder="Kindly send me a Message" maxLength={800} >   </textarea>  <br></br> <br></br>

    <button>Submit</button>


</div>
        </>
    )
}

export default Contact