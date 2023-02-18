import React from "react";
import { Link } from "react-router-dom";

const Freelecture = () => {
  return (
    <div className="container" id="ChatRoom">

      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>금융시장의이해</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>경영학원론</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>마케팅</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>생산경영</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>인적자원관리</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>재무관리</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>경영사례분석</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>경영소프트웨어응용</div>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Freelecture;
