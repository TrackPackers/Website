import React, { useState } from 'react';
import NewPostsFeed from './Feeds/NewPostsFeed';
import TopPostsFeed from './Feeds/TopPostsFeed';

function Feed() {
  const [currentFeed, setCurrentFeed] = useState('Newest');

  const normal =
    'flex items-center  flex-shrink-0 px-5 py-2 border-b-4 border-gray-300 hover:border-blue-500 cursor-pointer';
  const active =
    'flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-blue-700';

  return (
    <div className="border-2 border-black rounded-lg">
      <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">
        <a
          rel="noopener noreferrer"
          onClick={() => setCurrentFeed('Newest')}
          className={currentFeed === 'Newest' ? active : normal}
        >
          Newest
        </a>
        <a
          rel="noopener noreferrer"
          onClick={() => setCurrentFeed('Top')}
          className={currentFeed === 'Top' ? active : normal}
        >
          Top
        </a>
      </div>
      {currentFeed === 'Newest' ? <NewPostsFeed /> : <TopPostsFeed />}
    </div>
  );
}

export default Feed;
