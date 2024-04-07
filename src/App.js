import { lazy, Suspense } from "react";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Project = lazy(() => import("./components/Project"));
const Skill = lazy(() => import("./components/Skill"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      }
    >
      <div className="App container my-10 mx-auto max-w-screen-1g bg-black">
        <Header />
        <main>
          <Hero />
          <Project />
          <Skill />
          <Contact />
        </main>
      </div>
    </Suspense>
  );
}

export default App;

/*
useEffect useState 조합을 통한 렌더링에서

suspense fallback과 lazy를 통해 컴포넌트 렌더링이 완료되면 표시하는 방식
suspense의 fallback 속성에 컴포넌트는 suspense 내부 하위 태그의 컴포넌트가
렌더링 될때까지 보여주는 것. 

Lazy Loading은 웹 애플리케이션의 성능을 향상시키는 기술 중 하나로,
웹 페이지가 처음 로드될 때 필요하지 않은 리소스(예: 이미지, 스크립트, 컴포넌트 등)를 로드하지 않는 방식
*/
