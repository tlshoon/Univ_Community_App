import React from "react";
import { Link } from "react-router-dom";

const Freelecture = () => {
  return (
    <div className="container" id="ChatRoom">
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>남자 기숙사</div>
          </Link>
        </div>
      </div>

      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>여자 기숙사</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Freelecture;
