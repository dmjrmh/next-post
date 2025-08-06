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
  const response = await fetch(base_url, {
    cache: 'no-store', // Disable caching to always fetch fresh data
  })
  const posts: Post[] = await response.json()

  return (
    <>
    <p>Current Time : {new Date().toLocaleTimeString()}</p>
    <div className={styles.bgRed}>Postingan Page</div>
    {posts.map((post) => {
      return (
        <CardList key={post.id}>
          <p className='text-slate-700'>{post.id} - {post.title}</p>
          <p className='text-slate-500'>{post.body}</p>
          <ViewUserButton userId={post.userId}/>
        </CardList>
      )
    })}
    </>
  )
}

export default Posts