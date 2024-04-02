import { useState } from "react"
import styles from "./Form.module.css";
import Navbar from "./Navbar";





const Form = ()=>{

    const [userInfo, setUserInfo] = useState({name:"", email:"", password:""})
    const [details, setDetails] = useState("")

    const handleInput =(e)=>{
        setUserInfo((user)=>({
            ...user,
            [e.target.name]: e.target.value
        }))
        // const handleState=()=>{
        //     if (userInfo) ==== ""{
        //         window.prompt("enter your details")
        //     }
        // }
    }


    
    return(
        <>
        <Navbar/>
        <div className={styles.holder}>
        <form onSubmit={null}>
            <div>
                <label className={styles.name}>Name</label><br></br>
                <input type="text" className={styles.input} name="name" onChange={handleInput}  placeholder="Your name" value={userInfo.name} />
            </div>

            <div className="form-control">
                <label className={styles.name}>Email</label><br></br>
                <input type="email" className={styles.input} name="email" onChange={handleInput}  placeholder="Your @gmail.com" value={userInfo.email} />
            </div>

            <div className="form-control">
                <label className={styles.name}>Password</label><br></br>
                <input type="password" className={styles.input} name="password" onChange={handleInput}  placeholder="Your password" value={userInfo.password} />
            </div>


        <button className={styles.btn}>Submit</button>
        </form>
        </div>
        </>
    )
}

export default Form