import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CreatePostModal from '../components/Modals/createPost';
import Settings from '../components/HomePage/Settings';
import Feed from '../components/HomePage/Feed';
import Trending from '../components/HomePage/Trending';

function HomePage() {
  return (
    <div className="container w-screen h-screen p-0 m-0 mt-24">
      <Navbar authenticated />
      <CreatePostModal />
      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 xl:grid-rows-1">
        <Settings />
        <Feed />
        <Trending />
      </div>
    </div>
  );
}

export default HomePage;
