import React from 'react'
import styles from "./navbar.module.css";
import Image from 'next/image'
import Link from "next/link";
import AuthLinks from "@/components/authLinks/AuthLinks";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
const Navbar = () =>  {
    return (
        <div className={styles.container}>
         <div className={styles.logo}>null</div>
            <div className={styles.link}>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contact</Link>
                <AuthLinks/>
                    <ThemeToggle className={styles.toggle}/>
            </div>
        </div>

    )
}

export default Navbar