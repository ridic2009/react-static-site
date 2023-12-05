import React from "react"

import styles from './index.module.scss'


export default function Search() {
    return (
        <input type="search" className={styles.search__input} maxLength={78}/>
    )
}