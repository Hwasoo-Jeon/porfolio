import React from "react";

const Contact = () => {
  return (
    <section className="my-28" id="contact">
      <header className="h-20 px-5 pt-0 text-2xl font-bold border-b-2">
        <h2>Contact Me</h2>
        <p className="text-base font-medium font-sansKR to-gray-900">
          감사합니다🤞
        </p>
      </header>
      {/* <div className="flex flex-col flex-wrap justify-between md:mx-6 md:flex-row"> */}
      <div className="md:mx-6">
        <div className="float-right p-5 my-5 md:px-0">
          <div>
            {/* 이름 주소 */}
            <div className="inline-block mr-5">
              <p className="font-bold">Name</p>
              <p className="font-thin font-sansKR">전화수</p>
            </div>
            <div className="inline-block mr-5">
              <p className="font-bold">Address</p>
              <p className="font-thin font-sansKR">대한민국 서울특별시</p>
            </div>
            <div className="inline-block mr-5">
              <p className="font-bold">Email</p>
              <p className="font-thin font-sansKR">royallhs@naver.com</p>
            </div>
            <div className="inline-block mr-5">
              <p className="font-bold">Phone</p>
              <p className="font-thin font-sansKR">010-9454-7820</p>
            </div>
            <div className="inline-block">
              <a
                href="https://github.com/Hwasoo-Jeon"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex flex-row items-end p-2 text-sm border border-gray-500 rounded-lg">
                  <img
                    src="./images/icons/github.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                  />
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
