"use client"
import styles from "./themeToggle.module.css";
import Image from "next/image";
import {useContext} from "react";
import {ThemeContext} from "@/context/ThemeContext";
const ThemeToggle = () => {

    const {toggle, theme} = useContext(ThemeContext)

    console.log(theme)

    return (
        <div className={styles.container} onClick={toggle}>

        <Image className={styles.margin} src="/moon.png" alt="dark mode" width={23} height={23} />
        <div className={styles.ball}></div>
        <Image className={styles.margin} src="/sun.png" alt="light mode" width={23} height={23} />
    </div>
);
};

export default ThemeToggle;