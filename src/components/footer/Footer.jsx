import React from 'react';
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                    <h1 className={styles.logo}>null</h1>
                <p className={styles.text}>The feeling of unhappiness is so much easier to convey than that of happiness. In misery we seem aware of our own existence, even though it may be in the form of a monstrous egotism: this pain of mine is individual, this nerve that winces belongs to me and to no other. But happiness annihilates us: we lose our identity.</p>
                <strong className={styles.text}>| fernando pessoa</strong>
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
