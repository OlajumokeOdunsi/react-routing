import { Link } from "react-router-dom"
import React from "react";
import styles from "./Navbar.module.css"

const Navbar=()=>{


return(
    
<div className={styles.link}>
    <Link to ={'/'}>Home</Link>
    <Link to ={'/about'}>About</Link>
    <Link to ={'/contact'}>Contact</Link>
    <Link to = {'/portfolio'}>Portfolio</Link>
    <Link to = {'/form'}>Form</Link>
    <Link to = {'/login'}>Login</Link>
  </div>
)
}


export default Navbar

