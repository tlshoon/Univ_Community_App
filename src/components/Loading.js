import React from 'react'
import {Background, LoadingText} from './Styles';
import Spinner from './assets/spinner.gif';


const Loading = () => {
  return (
    <Background>
    <LoadingText></LoadingText>
    <img src={Spinner} alt="로딩중" width="10%" height="auto" />
  </Background>
  )
};



export default Loading