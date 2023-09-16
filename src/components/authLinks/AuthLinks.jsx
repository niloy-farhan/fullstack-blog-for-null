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
               <Link href={"/login"} className={styles.link}>Login</Link>
           ):(
               <>
               <Link href={"/write"} className={styles.link}>Write</Link>
               <span className={styles.link}>Logout</span>
               </>
           )}
           <div className={styles.buttn} onClick={()=>setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
           </div>
           {open && (
               <div className={styles.responsiveMenu}>
                   <Link href="/">Home</Link>
                   <Link href="/">About</Link>
                   <Link href="/">Contact</Link>
                   {status === "nothenticated" ? (
                       <Link href={"/login"}>Login</Link>
                   ):(
                       <>
                           <Link href={"/write"}>Write</Link>
                           <span className={styles.link}>Logout</span>
                       </>
                   )}
               </div>
           )}
       </>
   );
};

export default AuthLinks;