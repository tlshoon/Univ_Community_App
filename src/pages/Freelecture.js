import React from "react";
import { Link } from "react-router-dom";

const Freelecture = () => {
  return (
    <div className="container" id="ChatRoom">

      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>[05214-01] 금융시장의이해</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>[00080-01] 경영학원론</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>[00241-01] 마케팅</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>[05966-01] 생산경영</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>[06122-01] 인적자원관리</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>[00798-01] 재무관리</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>[06366-01] 경영사례분석</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>[01500-01] 경영소프트웨어응용</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>[04443-01] 경영전략론</div>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="freeForm">
        <div className="nweet">
          <Link to="/FreeTalk">
            <div>[00078-01] 경영통계</div>
          </Link>
        </div>
      </div>
      
      
    </div>
  );
};

export default Freelecture;
