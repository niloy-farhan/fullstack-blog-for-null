
import styles from "./authLinks.module.css";
import Link from "next/link";
const AuthLinks = () => {
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
       </>
   );
};

export default AuthLinks;