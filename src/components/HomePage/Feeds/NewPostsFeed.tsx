import React, { useEffect, useState } from "react";
import { Post } from "../../../utils/Interfaces/Post";
import getNewestPosts from "../../../utils/API/getNewestPosts";
import FeedItem from "./FeedItem";
function NewPostsFeed() {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      if(posts.length == 0) {
        async function getPosts (){
          const posts = await getNewestPosts();
          setPosts(posts.data);
        }
        getPosts();
      }
    })

    return (
      <div className="container">
        {posts.length == 0 ? <h1>NewPostsFeed</h1> : 
        <div className="mt-5">
          {posts.map(function(post, i) {
           return <FeedItem post={post}/>
          })}
        </div>}
      </div>
    );
  }
  
  export default NewPostsFeed;