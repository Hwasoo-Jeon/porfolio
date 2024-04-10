import React from "react";
import projects from "../projectData";
import ProjectModal from "./ProjectModal";
import Slider from "react-slick";
import { useToggleModal } from "../recoil/UseToggleModal";

const Project = () => {
  const { openModal } = useToggleModal();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    sliesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <ProjectModal></ProjectModal>
      <section className="my-28 px-5" id="projects">
        <header className="text-2xl font-bold pt-10">
          <h2>Projects</h2>
        </header>
        <div className="my-7 space-y-24">
          {projects.map((project, index) => (
            <article
              className="flex flex-wrap md:justify-between md:items-center"
              key={index}
            >
              <picture
                className={
                  index % 2 === 0
                    ? "w-full md:w-6/12 shadow-lg "
                    : "w-full md:w-6/12 shadow-lg md:order-1"
                }
              >
                <source
                  srcSet={`${project.image}-1280.svg 1920w,
                        ${project.image}-768.svg 768w,
                        ${project.image}-320.svg 320w`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  type="image/svg"
                />
                <source
                  srcSet={`${project.image}-1280.jpg 768w,`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  type="image/jpg"
                />

                <img
                  width="768px"
                  height="575px"
                  loading="lazy"
                  alt={project.title}
                  className="rounded-lg"
                />
              </picture>
              <div className="flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 ">
                <h3 className="uppercase font-bold text-5xl">
                  {project.title}
                </h3>
                <p className="font-sansKR text-xl">{project.description}</p>
                <div className="flex overflow-auto space-x-3 pb-2">
                  {project.tools.map((disc, index) => (
                    <span
                      className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                      key={index}
                    >
                      {disc}
                    </span>
                  ))}
                </div>
                <div className="w-auto flex space-x-5 relative">
                  <div className="modal-icon" onClick={() => openModal(index)}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/modal.svg`}
                      alt="link to modal"
                      width="24px"
                      height="24px"
                    />
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/github.svg`}
                      alt="link to github page"
                      width="24px"
                      height="24px"
                    />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/house.svg`}
                      alt="link to live website"
                      width="24px"
                      height="24px"
                    />
                  </a>
                  <div className="border border-gray-500 px-2 py-1 rounded-lg text-sm font-sansKR">
                    {project.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="mx-5">
        <a
          href="https://github.com/Hwasoo-Jeon"
          target="_blank"
          rel="noreferrer"
          className="bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto"
        >
          <span>See more on Github</span>
        </a>
      </div>
    </>
  );
};

export default Project;
