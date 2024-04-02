import React from "react";
import Navbar from "./Navbar";
import styles from "./Home.module.css"

const Home=()=>{

    return(
        <>
        <Navbar />
    <h3 className={styles.home}>Welcome to my homepage, my name is Olajumoke Odunsi, <br></br>
     I'm a software Developer, Its Nice to have you here</h3>
        </>
    )
}
export default Home