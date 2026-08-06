// html 연결 파일 : 여기에 페이지 렌더링 요청하여 화면 뜨도록 함

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import LibaryPage from './pages/sample/LibraryPage';

import ButtonPage from './pages/material/ButtonPage';
import CommentPage from './components/sample/Comment';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// // LibraryPage
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <LibraryPage/>
// )


// // ButtonPage
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ButtonPage/>
// )



// import {CommentPage as Application} from './pages/sample/CommentPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Application/>
// )


// import CapacityPage from './pages/reactive/CapacityPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <CapacityPage/>
// )



// import EventPage from './pages/event/EventPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <EventPage/>
// )



// import TestRouterApp from './TestRouterApp';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <TestRouterApp/>
// )


import RenderingPage from './pages/rendering/RenderingPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RenderingPage/>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
