import styles from "./writePage.module.css"
import Image from "next/image";
import {useState} from "react";

const WritePage = () => {

    const [open, steOpen] = useState(false)
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title">
                <div className={styles.editor}>
                    <button className={styles.button}>
                        <Image src="/plus.png" alt"" width={16} height={16}/>
                    </button>
                    {open && <div className={styles.add}>
                        <button className={styles.button}>
                            <Image src="/plus.png" alt"" width={16} height={16}/>
                        </button>
                        <button className={styles.button}>
                            <Image src="/plus.png" alt"" width={16} height={16}/>
                        </button>
                        <button className={styles.button}>
                            <Image src="/plus.png" alt"" width={16} height={16}/>
                        </button>
                    </div>}
                </div>
            </input>
        </div>
    )
}

export default WritePage