import React from 'react'
import {Background, LoadingText} from './Styles';
import Spinner from './assets/spinner.gif';


const Loading = () => {
  return (
    <Background>
    <LoadingText></LoadingText>
    <img src={Spinner} alt="로딩중" width="5%" />
  </Background>
  )
};



export default Loading