"use client"
import styles from "./authLinks.module.css";
import Link from "next/link";
import {useState} from "react";
const AuthLinks = () => {

    const [open, setOpen] = useState(false)
   const status = "nothenticated";
   return(
       <>
           {status === "nothenticated" ? (
               <Link href={"/login"}>Login</Link>
           ):(
               <>
               <Link href={"/write"}>Write</Link>
               <span className={styles.link}>Logout</span>
               </>
           )}
           <div className={styles.buttn}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
           </div>
       </>
   );
};

export default AuthLinks;