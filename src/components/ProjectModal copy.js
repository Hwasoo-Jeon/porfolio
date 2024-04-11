import React from "react";
import ReactModal from "react-modal";
import Slider from "react-slick";
import projects from "../projectData";
import { useToggleModal } from "../recoil/UseToggleModal";

/*overlay는 모달 창 바깥 부분을 처리하는 부분이고,
content는 모달 창부분이라고 생각하면 쉬울 것이다*/
const customModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "80%",
    height: "70%",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgb(40 40 46 / 90%)",
    overflow: "hidden",
    alignContent: "center",
    boxSizing: "border-box",
    // padding : "2rem",
    paddingTop: "0.7rem",
    paddingBottom: "1.7rem",
    paddingRight: "1.7rem",
    paddingLeft: "1.7rem",
    border: "hidden",
  },
};

function ProjectModal() {
  const { modal, openModal } = useToggleModal();
  const idx = modal.titleIdx;
  const curProject = projects[idx];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    sliesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ReactModal
      isOpen={modal.isOpen}
      onRequestClose={() => openModal()}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="test Modal"
      shouldCloseOnOverlayClick={false}
    >
      <Slider {...settings}>
        {curProject &&
          curProject.page.map((page, idx) => {
            if (idx === 0) {
              return (
                <div className="modal-inner-layout" key={idx}>
                  <div
                    className="modal-inner-close-btn-layout"
                    onClick={() => openModal()}
                  >
                    <div className="modal-inner-close-btn-icon">&times;</div>
                  </div>
                  <div className="modal-inner-close-btn-beneath">
                    <div className="modal-inner-left">
                      <picture>
                        <source srcSet={`${page.image}-1280.svg 1280w`} />
                        <img className="modal-inner-image" alt="" />
                      </picture>
                    </div>
                    <div className="modal-inner-right">
                      <div className="flex">
                        <p className="modal-inner-right-title">프로젝트</p>
                        <p className="modal-inner-right-description">
                          {page.description}
                        </p>
                      </div>
                      <div className="flex mt-2 ">
                        <p className="modal-inner-right-title">목표 및 특징</p>
                        <p className="modal-inner-right-description">
                          {page.function}
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <p className="modal-inner-right-title">서비스 기능</p>
                        <div>
                          {page.tools.map((content, idx) => (
                            <p
                              className="modal-inner-right-description-loop"
                              key={idx}
                            >
                              {content}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="flex mt-4">
                        <p className="modal-inner-right-title">담당 기능</p>
                        <div>
                          {page.etc.map((content, idx) => (
                            <p
                              className="modal-inner-right-description-loop"
                              key={idx}
                            >
                              {content}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else if (idx <= curProject.page.length - 2) {
              return (
                <div className="modal-inner-layout" key={idx}>
                  <div
                    className="modal-inner-close-btn-layout"
                    onClick={() => openModal()}
                  >
                    <div className="modal-inner-close-btn-icon">&times;</div>
                  </div>
                  <div className="modal-inner-close-btn-beneath">
                    <div className="modal-inner-left">
                      <picture>
                        <source srcSet={`${page.image}-1280.svg 1280w`} />
                        <img className="modal-inner-image" alt="" />
                      </picture>
                    </div>
                    <div className="modal-inner-right">
                      <div className="flex">
                        <p className="modal-inner-right-title">담당 영역</p>
                        <p className="modal-inner-right-description">
                          {page.description}
                        </p>
                      </div>
                      <div className="flex mt-2 ">
                        <p className="modal-inner-right-title">담당 기능</p>
                        <p className="modal-inner-right-description">
                          {page.function}
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <p className="modal-inner-right-title">기술 및 도구</p>
                        <p className="modal-inner-right-description">
                          {page.tools}
                        </p>
                      </div>
                      <div className="flex mt-4">
                        <p className="modal-inner-right-title">기타사항</p>
                        <div>
                          {page.etc.map((content, idx) => (
                            <p
                              className="modal-inner-right-description-loop"
                              key={idx}
                            >
                              {content}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="modal-inner-layout" key={idx}>
                  <div
                    className="modal-inner-close-btn-layout"
                    onClick={() => openModal()}
                  >
                    <div className="modal-inner-close-btn-icon">&times;</div>
                  </div>
                  <div className="modal-inner-close-btn-beneath">
                    <div className="modal-inner-left">
                      <picture>
                        <source srcSet={`${page.image}-1280.svg 1280w`} />
                        <img className="modal-inner-image" alt="" />
                      </picture>
                    </div>
                    <div className="modal-inner-right">
                      <div className="flex">
                        <p className="modal-inner-right-title">
                          문제 해결과 느낀점
                        </p>
                      </div>

                      <div className="flex mt-4">
                        <p className="modal-inner-right-title">내용</p>
                        <div>
                          {page.etc.map((content, idx) => (
                            <p
                              className="modal-inner-right-description-loop"
                              key={idx}
                            >
                              {content}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </Slider>
    </ReactModal>
  );
}

export default ProjectModal;
