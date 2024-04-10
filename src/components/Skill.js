import React from "react";
const publicUrl = process.env.PUBLIC_URL;
const Skill = () => {
  return (
    <section className="my-28  px-5">
      <header className="text-2xl font-bold pt-10">
        <h2>Skills & Tools</h2>
      </header>
      <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6">
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Spring FW & Boot"
        >
          <img
            src={`${publicUrl}/images/icons/springframework-original.svg`}
            alt="Spring FW & Boot"
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Spring FW & Boot
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="React Js"
        >
          <img
            src={`${publicUrl}/images/icons/react-original.svg`}
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          React JS
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Javascript"
        >
          <img
            src={`${publicUrl}/images/icons/javascript-original.svg`}
            alt="Javascript"
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Javascript
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="MariaDB"
        >
          <img
            src={`${publicUrl}/images/icons/mariadb-original.svg`}
            alt="MariaDB"
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          MariaDB
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="AWS"
        >
          <img
            src={`${publicUrl}/images/icons/aws-original.svg`}
            alt="AWS"
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          AWS
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Azure"
        >
          <img
            src={`${publicUrl}/images/icons/azure-original.svg`}
            alt="Azure"
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Azure
        </div>
      </div>
    </section>
  );
};

export default Skill;
