import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from './NotFound.module.css'

const NotFound = () => {
    const navigate = useNavigate();

  return (
    <div className={styles.container}>
        <div className={styles.container2}>
        <div className={styles.div}>
            <h1 className={styles.head}>Page Not Found</h1>
        </div>
       <Link to="/dashboard" className={styles.link}>
       Return Home
       </Link>
       </div>
    </div>
  )
}

export default NotFound