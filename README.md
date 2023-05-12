# 대학커뮤니티앱

## 프로젝트 설명

### 📆 기간

2023.02.23 ~ 2023.02.27<br/>

<br>

### 💡 대학커뮤니티앱을 만든 이유

```
학생들이 익명으로 실시간 소통을 할 수 있게 서비스를 하면 좋겠다 생각을 했다.
학생들이 자유롭게 소통할 수 있는 자유게시판과 기숙사 학생들끼리 소통할 수 있는 기숙사 게시판을 만들었다.
```

<br>

### ⚙️ 사용 기술
JavaScript, react-router-dom, authService, uuid, fontAwesome, styled-components

<br>

### 🎬 데이터베이스
Firebase


<br>

## 🗂 파일구조

```txt
* src-*             
   ├─ components
   │  ├─ App.js
   │  ├─ AuthForm.js
   │  ├─ Loading.js
   │  ├─ Navigation.js
   │  ├─ Router.js
   │  ├─ Styles.js
   │  ├─ Tweet.js
   │  ├─ TweetFactory.js
   │  └─ assets
   │     └─ spinner.gif
   ├─ fbase.js
   ├─ index.js
   ├─ pages
   │  ├─ FreeTalk.js
   │  └─ Freelecture.js
   ├─ routes
   │  ├─ Auth.js
   │  ├─ Home.js
   │  └─ Profile.js
   └─ styles.css
```

<br>

## 🖥️ client
클라이언트 실행
```
npm run start
```
port: 4000

<br>

### 🔎 기능 설명

<hr>

### 1. 로그인 및 회원가입

<img width="284" alt="로그인" src="https://github.com/tlshoon/Univ_Community_App/assets/87574833/15ef7286-90c2-47fc-ac6d-2fb06be336db">
&nbsp;&nbsp;
<img width="284" alt="회원가입" src="https://github.com/tlshoon/Univ_Community_App/assets/87574833/efa32678-b1c7-4391-b402-8aa41a522c2f">

- 처음 접속을 하게 되면 위에 이미지와 같이 로그인 화면이 뜬다. 로그인은 일반 회원가입으로도 가능하고, 기존 구글, 깃허브 계정으로도 회원가입후 로그인 할 수 있다.
 - 회원가입을 누르고 이메일 형식의 아이디와 비밀번호를 입력하면 간단하게 회원가입 할 수 있다.

<img width="1277" alt="회원정보" src="https://github.com/tlshoon/Univ_Community_App/assets/87574833/f68a57b8-ade4-4252-b8cf-7295949f8680">

- 회원가입을 완료하면 입력한 회원 정보가 Firebase DB에 저장이 된다.

<br>

### 2. 홈 화면

<img width="284" alt="홈" src="https://github.com/tlshoon/Univ_Community_App/assets/87574833/541136a7-4563-46c3-9f4b-023f296d70a9">

 - 로그인을 하면 자유게시판과 기숙사 게시판을 선택할 수 있는 화면이 뜬다. 자신이 원하는 게시판에 들어가서 소통을 할 수 있다.

<br>

### 3. 프로필 변경

<img width="284" alt="프로필" src="https://github.com/tlshoon/Univ_Community_App/assets/87574833/3eceb2c2-4219-4ba5-96e9-d7e75e91e625">
&nbsp;&nbsp;
<img width="284" alt="프로필 변경" src="https://github.com/tlshoon/Univ_Community_App/assets/87574833/60dcb44f-8c35-4450-a5de-e36b97ead063">

 - Profile이미지를 클릭하면 상대방에게 보이는 나의 닉네임을 변경할 수 있다. 
 
 <br>
 
 
### 4. 게시판 메세지

<img width="284" alt="메세지-1" src="https://github.com/tlshoon/Univ_Community_App/assets/87574833/5aece5fb-ec8b-435b-aaac-5ce7f97c1df2">
&nbsp;&nbsp;
<img width="284" alt="스크린샷 2023-05-12 오후 9 36 41" src="https://github.com/tlshoon/Univ_Community_App/assets/87574833/d3239c11-e723-42d0-8c42-0a0b2744b71f">

 - 위 사진과 같이 다른 이용자들과 대화를 나눌 수 있다.
 - 두번째 사진을 보면 상대방이 설정한 닉네임과 채팅이 보이는 것을 볼 수 있다.
- Firebase Storage를 활용하여 +버튼을 누르면 이미지 전송도 가능하게 구현을 했다.

 
 <br>
 

### 5. DB
<img width="1261" alt="대화내역" src="https://github.com/tlshoon/Univ_Community_App/assets/87574833/a720d0a6-3809-4f2d-9dc8-c04675fecdc0">
 - DB에 사용자 아이디와 대화 내역이 들어오는 것을 확인할 수 있다.
 <br>

<br>

### 후속조치
 - 디자인을 수정하고 게시판을 세분화하여 더 많은 게시판을 만들면 좋을 것 같다.
 - 인증을 강화하고 여러 편의시설이 들어가면 좋을 것 같다.
 - 1:1 채팅도 가능하면 재밌을 것 같다.
