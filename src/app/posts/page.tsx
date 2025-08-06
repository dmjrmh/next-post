import React from 'react'
import styles from './postPage.module.css'
import ViewUserButton from '../components/ViewUserButton'

const Posts = () => {
  return (
    <>
    <div className={styles.bgRed}>Postingan Page</div>
    <ViewUserButton />
    </>
  )
}

export default Posts