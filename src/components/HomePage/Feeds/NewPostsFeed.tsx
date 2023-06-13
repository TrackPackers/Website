import React, { useEffect, useState } from 'react';
import { Post } from '../../../utils/Interfaces/Post';
import getNewestPosts from '../../../utils/API/getNewestPosts';
import FeedItem from './FeedItem';

function NewPostsFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tries, setTries] = useState(false);

  async function getPosts() {
    const newPosts = await getNewestPosts();
    if (newPosts.data.length !== null && newPosts.data.length !== undefined) {
      setPosts(newPosts.data.reverse());
    }
  }

  useEffect(() => {
    if (posts.length === 0 && !tries) {
      setTries(true);
      getPosts();
    }
  }, [posts.length, tries]);

  return (
    <div className="container">
      {posts.length === 0 ? (
        <h1 className="text-lg">No new posts available</h1>
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
