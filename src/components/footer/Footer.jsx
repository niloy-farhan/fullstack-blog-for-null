import React from 'react';
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                    <h1 className={styles.logo}>null</h1>
                    <p className={styles.text}>Thank you for visiting our website! We appreciate your interest and hope you found what you were looking for. If you have any questions or feedback, please don't hesitate to contact us. We look forward to serving you again soon!</p>
            </div>

            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>tags</span>
                    <Link href="/"></Link>
                    <Link href="/">thoughts</Link>
                    <Link href="/">article</Link>
                    <Link href="/">infiltration</Link>
                    <Link href="/">programs</Link>
                    <Link href="/">projects</Link>

                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>links</span>
                    <Link href="/">home</Link>
                    <Link href="/">about</Link>
                    <Link href="/">contact</Link>
                    <Link href="/">login</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>networks</span>
                    <Link href="/">github</Link>
                    <Link href="/">linkedin</Link>
                    <Link href="/">twitter</Link>
                    <Link href="/">null</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
