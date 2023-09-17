import React from 'react'
import styles from "./pagination.module.css";
import Link from "next/link";

const Pagination = () =>  {
    return (
        <div className={styles.container}>
            <div className={styles.pagination}>
                <a href="/">&laquo;</a>
                <a href="/">1</a>
                <a href="#" className="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}

export default Pagination