import React from 'react'
import styles from "../Homepage/explore.module.css"
const Explore = () => {
    return (
        <article className={`${styles.title}`}>
            <div className={`${styles.handleContent}`}>
                <h1 className={`${styles.titleHead}`}>Explore My Web Development Work</h1>
                <p className={`${styles.smallHead}`}>Transforming Ideas into Digital Realities</p>
            </div>
        </article>
    )
}

export default Explore