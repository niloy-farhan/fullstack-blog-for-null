import styles from "./singlePage.module.css"
import Image from "next/image";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <a href="/" className={styles.top}>
                    <div className={styles.back}>

                        <p><span className={styles.baack}>&#8617;</span> back to home</p>
                    </div>
                </a>
                <div className={styles.textContainer}>

                           <span className={styles.date}>
                                monday, 18 september 2023
                            </span>
                        <h1 className={styles.title}> feature 1</h1>

                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                        </div>
                        <a href="https://twitter.com/MrFarhanNiloy" target="_blank">
                            <div className={styles.userTextContainer}>
                            <span className={styles.username}>
                                null
                            </span>
                                <span className={styles.lin}>
                                @niloy-farhan
                            </span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>

                </div>

            </div>
        </div>
    )
}

export default SinglePage