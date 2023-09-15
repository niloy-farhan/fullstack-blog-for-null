
import styles from "./themeToggle.module.css";
import Image from "next/image";
const ThemeToggle = () => {
    return <div className={styles.container}>

        <Image className={styles.margin} src="/moon.png" alt="dark mode" width={24} height={24} />
        <div className={styles.ball}></div>
        <Image className={styles.margin} src="/sun.png" alt="light mode" width={24} height={24} />

    </div>;
};

export default ThemeToggle;