import React from "react";

const Tweet = ({ Tweetobj, isOwner }) => {

  return (
    <div className={isOwner ? "my-text-div" : "friend-text-div"}>
      <div className={isOwner ? "my-text-container" : "friend-text-container"}>    
            {!isOwner && <div className="othername">{Tweetobj.profileName}</div>}
            {Tweetobj.attachmentUrl && (
              <img className="img_size" src={Tweetobj.attachmentUrl} />
            )}
            <h4 className={isOwner ? "my-text" : "friend-text"}>
              {Tweetobj.text}
            </h4>
      </div>
    </div>
  );
};

export default Tweet;
