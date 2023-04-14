import React from 'react';
import { Post } from '../../../utils/Interfaces/Post';

interface Props {
  post: Post;
}

function FeedItem(props: Props) {
  return (
    <div className="container">
      <h2>
        {props.post.message} - {props.post.name}
      </h2>
    </div>
  );
}

export default FeedItem;
