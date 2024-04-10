import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA8WxwVDOQPriRnfDjel7Ov9crZclCyKL0",
  authDomain: "react-quiz-app-main.firebaseapp.com",
  projectId: "react-quiz-app-main",
  storageBucket: "react-quiz-app-main.appspot.com",
  messagingSenderId: "368144459432",
  appId: "1:368144459432:web:184ed60b07d73749f6849d",
  measurementId: "G-C3EZ2L2ZJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals