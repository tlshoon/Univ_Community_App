import React from "react";
import { Link } from "react-router-dom";


const Home = ({ userObj }) => {
  
  return (
    <div className="container" id="ChatRoom">
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
           <div>자유게시판</div>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
