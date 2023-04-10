import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CreatePostModal from "../components/Modals/createPost";

function HomePage() {
    return (
      <div>
        <Navbar authenticated={true} />
        <CreatePostModal/>
        <h1>hello</h1>
      </div>
    );
  }
  
  export default HomePage;