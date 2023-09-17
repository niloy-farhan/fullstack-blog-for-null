import React from 'react'
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () =>  {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.thoughts}`}>
                    <Image
                        src={"/style.png"}
                        alt={""}
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    thoughts
                </Link>

                <Link href="/blog?cat=style" className={`${styles.category} ${styles.article}`}>
                    <Image
                        src={"/style.png"}
                        alt={""}
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    articles
                </Link>

                <Link href="/blog?cat=style" className={`${styles.category} ${styles.infiltration}`}>
                    <Image
                        src={"/style.png"}
                        alt={""}
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    infiltration
                </Link>

                <Link href="/blog?cat=style" className={`${styles.category} ${styles.programs}`}>
                    <Image
                        src={"/style.png"}
                        alt={""}
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    programs
                </Link>

                <Link href="/blog?cat=style" className={`${styles.category} ${styles.projeccts}`}>
                    <Image
                        src={"/style.png"}
                        alt={""}
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    projects
                </Link>
            </div>
        </div>
    )
}

export default CategoryList