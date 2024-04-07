import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RecoilRoot } from "recoil";

const rootNode = document.getElementById("root");
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
// react v18은 createRoot API 이용하여 root 생성
// recoil : 상태관리 라이브러리, modal 메서드에 대한 상태를 bottom up 으로 관리하기 위하여 사용
// npm i recoil > RecoilRoot 컴포넌트로 recoil 상태를 사용할 컴포넌트 감싸기.
// recoil 관련 컴포넌트 Atom, Selector
