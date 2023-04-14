import React, { useEffect, useState } from 'react';
import { Post } from '../../../utils/Interfaces/Post';
import getNewestPosts from '../../../utils/API/getNewestPosts';
import FeedItem from './FeedItem';

function NewPostsFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    const newPosts = await getNewestPosts();
    setPosts(newPosts.data);
  }

  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
  });

  return (
    <div className="container">
      {posts.length === 0 ? (
        <h1>NewPostsFeed</h1>
      ) : (
        <div className="mt-5">
          {posts.map(function (post, i) {
            return <FeedItem key={post.ObjectID} post={post} />;
          })}
        </div>
      )}
    </div>
  );
}

export default NewPostsFeed;
