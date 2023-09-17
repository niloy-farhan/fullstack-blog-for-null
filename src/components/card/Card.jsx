import styles from "./card.module.css";
import Image from "next/image";

const Card = () => {
    return (

                <article className={styles.blogPost}>
                    <h2 className={styles.blogpostTitle} >feature 1</h2>
                    <p className={styles.blogpostDate} >January 1, 2021</p>
                    <p className={styles.blogpostContent} >
                        The website offers a variety of articles
                        and tutorials on different programming
                        languages, data structures, and algorithms,
                        making it a great resource for anyone
                        looking to improve their coding skills.
                        The website also provides a platform for
                        users to test their skills by solving
                        practice problems, which are accompanied
                        by detailed solutions and explanations.
                    </p>
                </article>

    );
}

export default Card;
