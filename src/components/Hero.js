import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  // useEffect(() => {
  //   Lottie.loadAnimation({
  //     container: container.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("./astronaout.json"),
  //   });
  //   animate.setSpeed(0.5);
  // }, []);

  return (
    <section className="my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns">
      {/* <div className="ml-auto w-72 md:w-96 lg:w-2/5">
        <div className="container" ref={container}></div>
      </div> */}
      <div className="hero-layout">
        <div className="hero-left-layout mb-auto space-y-5">
          <div className="hello-layout">
            <h1 className="text-5xl font-bold md:text-7xl">
              Hello. I’m Hwasoo-Jeon,
              <br />
            </h1>
            <div className="text-5xl font-bold md:text-7xl text-developer">
              a web developer.
            </div>
          </div>
          <div className="focusing-text tracking-wider leading-loose">
            "목표의식과 즐거움으로 성장"
            <br />
            <span className="content-detail tracking-wide leading-relaxed">
              패션MD 경험을 바탕으로 웹 개발에 뛰어들어 '신한DS' 교육 과정을
              통해 역량 강화에 집중하였습니다.
              <br /> 특히, Cloud와 PL/SQL 등{" "}
              <span className="content-detail-focusing">
                추가 학습한 기술을 프로젝트에 적용
              </span>
              하는 것을 목표로 세웠고,
              <br /> 이 결과{" "}
              <span className="content-detail-focusing">성적우수상</span>을
              수상할 수 있었습니다.
            </span>
          </div>

          <div className="focusing-text tracking-wider leading-loose">
            "사용자 중심 개발"
            <br />
            <span className="content-detail tracking-wide leading-relaxed">
              카드 주제의 프로젝트 경진 과정에서 '카드 기획에 유용한 관리자
              기능'을 구현한 경험이 있습니다.
              <br /> 카드의 혜택을 Drag And Drop으로 조합하고, 조합된 혜택의
              가치를 계산하여 기존 카드와 비교하는 기능을 개발하였습니다.
              <br /> 이는{" "}
              <span className="content-detail-focusing">
                고객에게 가치있는 혜택을 제안
              </span>
              한다는 심사를 받았으며, 이 결과{" "}
              <span className="content-detail-focusing">장려상</span>을 수상할
              수 있었습니다.
            </span>
          </div>
        </div>
        <div className="hero-right-layout mb-auto space-y-5"></div>
      </div>
    </section>
  );
};

export default Hero;
