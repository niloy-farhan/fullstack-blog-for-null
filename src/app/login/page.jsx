import styles from "./loginPage.module.css"

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton}>Sign in with google</div>
                <div className={styles.socialButton}>Sign in with github</div>
                <div className={styles.socialButton}>Sign in with facebook</div>

            </div>

        </div>
    )
}

export default LoginPage