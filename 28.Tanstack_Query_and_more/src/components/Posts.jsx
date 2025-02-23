import React from 'react'
import { usePosts } from '../hooks/queries/use-posts'

const Posts = () => {
    const {data:postData  ,isLoading,isSuccess} = usePosts()
    console.log(postData)
  return (
    <div>
      <h1>Posts</h1>
      {isLoading &&  <h1>post is loading.....</h1>}
    </div>
  )
}

export default Posts