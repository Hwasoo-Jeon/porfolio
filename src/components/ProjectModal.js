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
    width: "70%",
    height: "60%",
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
    paddingRight: "2rem",
    paddingLeft: "2rem",
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
                <div className="flex md:items-center" key={idx}>
                  <div className="float-right mb-4">
                    <span onClick={() => openModal()}>&times;</span>
                  </div>
                  <div className="modal-inner-left">
                    <picture>
                      <source srcSet={`${page.image}-1280.svg 1280w`} />
                      <img className="modal-inner-image" alt="" />
                    </picture>
                  </div>
                  <div className="modal-inner-right">
                    <div className="flex mt-4">
                      <p className="font-sansKR font-normal text-base mr-8">
                        프로젝트
                      </p>
                      <p className="porfolio-description-long w-4/5">
                        {page.description}
                      </p>
                    </div>
                    <div className="flex mt-4 ">
                      <p className="font-sansKR font-normal text-base mr-2">
                        목표 및 특징
                      </p>
                      <p className="porfolio-description-long w-4/5">
                        {page.function}
                      </p>
                    </div>
                    <div className="flex mt-4">
                      <p className="font-sansKR font-normal text-base mr-3">
                        서비스 기능
                      </p>
                      <div className="w-4/5">
                        {page.tools.map((content, idx) => (
                          <p
                            className="porfolio-description-long text-sm"
                            key={idx}
                          >
                            {content}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex mt-4">
                      <p className="font-sansKR font-normal text-base mr-7">
                        담당 기능
                      </p>
                      <div className="w-4/5">
                        {page.etc.map((content, idx) => (
                          <p
                            className="porfolio-description-long text-sm"
                            key={idx}
                          >
                            {content}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else if (idx <= curProject.page.length - 2) {
              return (
                <div className="flex md:items-center" key={idx}>
                  <div className="float-right mb-4">
                    <span onClick={() => openModal()}>&times;</span>
                  </div>
                  <div className="modal-inner-left">
                    <picture>
                      <source srcSet={`${page.image}-1280.svg 1280w`} />
                      <img className="modal-inner-image" alt="" />
                    </picture>
                  </div>
                  <div className="modal-inner-right">
                    <div className="flex mt-4">
                      <p className="font-sansKR font-normal text-xl mr-9">
                        담당 영역
                      </p>
                      <p className="porfolio-description">{page.description}</p>
                    </div>
                    <div className="flex mt-4">
                      <p className="font-sansKR font-normal text-xl mr-9">
                        담당 기능
                      </p>
                      <p className="porfolio-description w-3/4">
                        {page.function}
                      </p>
                    </div>
                    <div className="flex mt-4">
                      <p className="font-sansKR font-normal text-xl mr-4">
                        기술 및 도구
                      </p>
                      <p className="porfolio-description">{page.tools}</p>
                    </div>
                    <div className="flex mt-4">
                      <p className="font-sansKR font-normal text-xl mr-9">
                        기타 사항
                      </p>
                      <div className="w-2/3">
                        {page.etc.map((content, idx) => (
                          <p className="porfolio-description-long" key={idx}>
                            {content}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="flex md:items-center" key={idx}>
                  <div className="float-right mb-4">
                    <span onClick={() => openModal()}>&times;</span>
                  </div>
                  <div className="modal-inner-left">
                    <picture>
                      <source srcSet={`${page.image}-1280.svg 1280w`} />
                      <img className="modal-inner-image" alt="" />
                    </picture>
                  </div>
                  <div className="modal-inner-right">
                    <div className="flex mt-4">
                      <p className="font-sansKR font-normal text-xl mr-9">
                        문제 해결과 회고
                      </p>
                    </div>
                    <div className="flex mt-4">
                      <p className="font-sansKR font-normal text-xl mr-9">
                        내용
                      </p>
                      <div className="w-2/3">
                        {page.etc.map((content, idx) => (
                          <p className="porfolio-description-long" key={idx}>
                            {content}
                          </p>
                        ))}
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
