import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TweetFactory = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [attachment, setAttachment] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (tweet === "") {
      return;
    }
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const tweetObj = {
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
      profileName: userObj.displayName,
    };
    await dbService.collection("tweets").add(tweetObj); // 폼 제출하면 tweets컬렉션에 트윗 추가하기
    setTweet(""); // 추가하고 나면 빈칸으로
    setAttachment("");
  };
  const onChange = (e) => {
    setTweet(e.target.value);
  };

  const onFileChange = (e) => {
    // console.log(e.target.files)
    const theFile = e.target.files[0];
    const reader = new FileReader(); /* 파일 리더를 만듦 */
    reader.onloadend = (finishedEvent) => {
      /* 파일 로딩과 읽는 게 끝나면 */
      setAttachment(finishedEvent.currentTarget.result);
    };
    reader.readAsDataURL(theFile); /* 파일 이름을 읽음 */
  };

  const ClearAttachment = () => setAttachment("");

  return (
    <form onSubmit={onSubmit} className="photo">

      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
          opacity: 0,
        }}
      />
      {attachment && (
        <div className="factoryForm__attachment">
          <img src={attachment} style={{ backgroundImage: attachment, marginRight: "10px" }} />
          <div className="factoryForm__clear" onClick={ClearAttachment}>
            {/* <span>Remove</span> */}
            <FontAwesomeIcon icon={faTimes}/>
          </div>
        </div>
      )}

      <div className="factoryForm">
        <div className="factoryInput__container">
          <label htmlFor="attach-file" className="factoryInput__label">
            <div className="plus">+</div>
            {/* <FontAwesomeIcon icon={faPlus} className="plus" /> */}
          </label>

          <input
            className="factoryInput__input"
            value={tweet}
            onChange={onChange}
            type="text"
            placeholder="메세지를 입력해주세요."
            maxLength={120}
          />
          <input type="submit" value="&rarr;" className="factoryInput__arrow" />
        </div>
      </div>
    </form>
  );
};

export default TweetFactory;
