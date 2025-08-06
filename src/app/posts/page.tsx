import React from 'react'
import styles from './postPage.module.css'
import ViewUserButton from '../components/Posts/ViewUserButton'
import { CardList } from '../components/Posts/CardList'

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url)
  const posts: Post[] = await response.json()

  return (
    <>
    <div className={styles.bgRed}>Postingan Page</div>
    <p>{posts[0].title}</p>
    <CardList>
      <p className='text-slate-700'>Hello</p>
      <i>Hi</i>
    </CardList>
    </>
  )
}

export default Posts