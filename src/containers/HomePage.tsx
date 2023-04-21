import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CreatePostModal from '../components/Modals/createPost';
import Settings from '../components/HomePage/Settings';
import Feed from '../components/HomePage/Feed';
import Trending from '../components/HomePage/Trending';

function HomePage() {
  return (
    <div className="container p-0 lg:m-24 lg:h-screen lg:w-screen">
      <Navbar authenticated />
      <CreatePostModal />
      <div className="grid flex-wrap w-full grid-flow-col grid-cols-1 grid-rows-3 xl:grid-cols-3 xl:grid-rows-1">
        <Settings />
        <Feed />
        <Trending />
      </div>
    </div>
  );
}

export default HomePage;
