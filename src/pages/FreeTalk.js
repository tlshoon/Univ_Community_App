import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Tweet from "../components/Tweet";
import TweetFactory from "../components/TweetFactory";
import { dbService } from "../fbase";

const FreeTalk = ({ userObj }) => {
  const [tweets, setTweets] = useState([]);

  //   const getTweets = async () => {    // 비동기로 가져와야 하기 때문에
  //     const dbTweets = await dbService.collection("tweets").get();  // db에서 데이터 가져오기
  //     dbTweets.forEach((document) => {
  //       const tweetObject = {
  //         ...document.data(),
  //         id: document.id,
  //       };
  //       setTweets((prev) => [tweetObject, ...prev]);
  //     });
  //   };
  
  useEffect(() => {
    // 컴포넌트 마운트 됐을 때 실행
    // getTweets();
    dbService
      .collection("tweets")
      .orderBy("createdAt", "asc")  // asc로하면 최신이 밑에
      .onSnapshot((snapshot) => {
        // 데이터베이스에 무슨 일이 있을 때 알림을 받는 기능, 스냅샷을 쓰면 리렌더 하지 않아도 됨
        const tweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTweets(tweetArray);
      });
  }, []);

  const scrollRef = useRef();
  useEffect(() => {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  const listRef = useRef();

  useLayoutEffect( () => {
    const detectMobileKeyboard = () => {
      if(document.activeElement.tagName=='INPUT'){
        listRef.current.scrollIntoView({block:'end'});
      }
    } 
    window.addEventListener("resize",detectMobileKeyboard);
    return _ => window.removeEventListener('resize',detectMobileKeyboard);
  },[])
  
  return (
    <div className="talk_container" ref = {scrollRef} id="ChatRoom">
      <div style={{ marginTop: 10 }} >
        {tweets.map((tweet) => (
          <Tweet 
            innerRef={listRef}
            key={tweet.id}
            Tweetobj={tweet}
            isOwner={tweet.creatorId === userObj.uid}
            userObj={userObj}
          />
        ))}
      </div>
      <div className="input_section">
      <TweetFactory userObj={userObj} />
      </div>
    </div>
  );
};
export default FreeTalk;
