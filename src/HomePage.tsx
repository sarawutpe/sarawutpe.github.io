import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import CustomDialog from "./CustomDialog";
import { useNavigate } from "react-router-dom";
import { databaseStacks, frameworkStacks, programingLanguageStacks, toolStacks } from "./constants";
import Typewriter from "typewriter-effect";

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function toggleDialog() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className="block w-full max-w-7xl lg:px-8 mx-auto">
        {/* Nav */}
        <div className="w-full bg-white ring-1 ring-zinc-100 py-5">
          <div className="flex w-full h-full justify-between p-2">
            <div className="flex flex-1">
              <h3 className="font-bold tracking-tight text-zinc-800 lg:text-3xl dark:text-zinc-100">Portfolio</h3>
            </div>
            <div className="flex">
              <nav className="pointer-events-auto block">
                <ul className="flex px-3 text-sm font-medium text-zinc-800">
                  <li className="cursor-pointer">
                    <a href="tel:+66633505700">Contact Me</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Name */}
        <div className="block w-full bg-gray-600 p-4 lg:p-5 mb-2 lg:mb-6">
          <div className="flex flex-col justify-between lg:flex-row w-100 gap-6">
            <div className="flex flex-1 items-center lg:flex-row gap-4">
              <img src="profile.jpg" alt="profile" className="w-20 h-20 rounded-full" />
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="text-2xl text-white font-semibold tracking-tight">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Hello, I'm Sarawut Chompookheaw")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("I am a Web Developer and Mobile Developer")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("I create dynamic web and mobile applications.")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Let's build something amazing together!")
                        .start();
                    }}
                    options={{
                      loop: true, // Enable looping
                      delay: 50, // Faster typing speed
                      deleteSpeed: 50, // Faster delete speed
                    }}
                  />
                </h3>
                <div className="flex gap-2 max-w-max">
                  <p className="flex flex-1 justify-center text-sm bg-gray-800 text-white p-1 text-nowrap rounded-2xl">Web Developer</p>
                  <p className="flex flex-1 justify-center text-sm bg-gray-800 text-white p-1 text-nowrap rounded-2xl">Mobile Developer</p>
                </div>
                <div className="flex gap-2 max-w-max">
                  <a href="https://github.com/sarawutpe" className="group">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-white transition group-hover:fill-zinc-300">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                      ></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/sarawut-chompookheaw/" className="group">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-white transition group-hover:fill-zinc-300">
                      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a
                className="inline-flex cursor-pointer items-center gap-2 justify-center rounded-2xl py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:text-zinc-500"
                href="resume.pdf"
                target="_blank"
              >
                Download CV
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition">
                  <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
              <a
                className="inline-flex cursor-pointer items-center gap-2 justify-center rounded-2xl py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-900 font-medium text-zinc-50 hover:text-zinc-200"
                onClick={toggleDialog}
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
        {/* Tech Stacks */}
        <div className="block w-full mb-2 lg:mb-6 p-4 lg:p-0">
          <div className="border-l-4 border-slate-400 p-1 mb-2">
            <h4 className="font-medium tracking-tight text-zinc-800 lg:text-2xl dark:text-zinc-100 mb-1">Tech Stacks</h4>
          </div>
          <div className="mb-2">
            <p className="text-zinc-600 font-medium text-md">Programming Languages</p>
            <div className="flex gap-5 flex-wrap p-2 w-full">
              {programingLanguageStacks.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <i className={item.iconName} style={{ fontSize: 24 }}></i>
                  <p className="text-zinc-600 text-xs">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p className="text-zinc-600 font-medium text-md">Frameworks & Libraries</p>
            <div className="flex gap-5 flex-wrap p-2 w-full">
              {frameworkStacks.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <i className={item.iconName} style={{ fontSize: 24 }}></i>
                  <p className="text-zinc-600 text-xs">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p className="text-zinc-600 font-medium text-md">Databases</p>
            <div className="flex gap-5 flex-wrap p-2 w-full">
              {databaseStacks.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <i className={item.iconName} style={{ fontSize: 24 }}></i>
                  <p className="text-zinc-600 text-xs">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p className="text-zinc-600 font-medium text-md">Tools</p>
            <div className="flex gap-5 flex-wrap p-2 w-full">
              {toolStacks.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <i className={item.iconName} style={{ fontSize: 24 }}></i>
                  <p className="text-zinc-600 text-xs">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Experiences */}
        <div className="block w-full mb-2 lg:mb-6 p-4 lg:p-0">
          <div className="border-l-4 border-slate-400 p-1 mb-2">
            <h4 className="font-medium tracking-tight text-zinc-800 lg:text-2xl dark:text-zinc-100 mb-1">Experiences</h4>
          </div>
          <div className="block mb-10">
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="flex w-full max-w-[600px]">
                <Swiper style={{ width: "100%", height: "100%" }} pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={{ delay: 3000 }} loop={true}>
                  <SwiperSlide>
                    <div className="overflow-hidden">
                      <a href="https://cityvariety.co.th" target="_blank">
                        <img src="company-cv.png" alt="company" className="hover:scale-110 transition-all duration-300" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="overflow-hidden">
                      <a href="https://cityvariety.co.th" target="_blank">
                        <img src="company-cv-2.png" alt="company" className="hover:scale-110 transition-all duration-300" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="overflow-hidden">
                      <a href="https://cityvariety.co.th" target="_blank">
                        <img src="company-cv-3.png" alt="company" className="hover:scale-110 transition-all duration-300" />
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="w-full">
                <div className="flex flex-col">
                  <h4 className="text-zinc-800 text-lg">
                    <b>Cityvariety</b> <br />
                    Cityvariety" is a leading provider of custom software solutions for web and mobile platforms, catering to the needs of government agencies and private businesses.
                  </h4>
                  <ul className="p-4 text-lg">
                    <li className="list-disc">Job position: Programmer (Full-time)</li>
                    <li className="list-disc">Responsibilities: Develop website & mobile applications</li>
                    <li className="list-disc">Working period: July 2023 - Present</li>
                    <li className="list-disc">Website: cityvariety.co.th</li>
                  </ul>
                </div>
                <button
                  onClick={() => navigate("/portfolio/cv")}
                  className="group w-full flex justify-between items-center border bg-blue-500 text-white hover:bg-blue-600 border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  <span>View Projects</span>
                  <svg className="transition group-hover:translate-x-1 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="block mb-10">
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="lex w-full max-w-[600px]">
                <Swiper style={{ width: "100%", height: "100%" }} pagination={{ clickable: true }} modules={[Pagination, Autoplay]} autoplay={{ delay: 3000 }} loop={true}>
                  <SwiperSlide>
                    <div className="overflow-hidden">
                      <a href="https://www.codemobiles.com" target="_blank">
                        <img src="company-cm.png" alt="company" className="hover:scale-110 transition-all duration-300" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="overflow-hidden">
                      <a href="https://www.codemobiles.com" target="_blank">
                        <img src="company-cm-2.png" alt="company" className="hover:scale-110 transition-all duration-300" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="overflow-hidden">
                      <a href="https://www.codemobiles.com" target="_blank">
                        <img src="company-cm-3.png" alt="company" className="hover:scale-110 transition-all duration-300" />
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="w-full">
                <div className="flex flex-col">
                  <h4 className="text-zinc-800 text-lg">
                    <b>Codemobiles</b> <br />
                    Codemobiles is a leading software and mobile application development company. Their product lineup includes POSPOS (Point of Sale), Berdedd, hrzoft. (HR Management System) and
                    Course online
                  </h4>
                  <ul className="p-4 text-lg">
                    <li className="list-disc">Job position: Web developer (Full-time)</li>
                    <li className="list-disc">Responsibilities: Develop website & mobile applications</li>
                    <li className="list-disc">Working period: April 2023</li>
                    <li className="list-disc">Website: www.codemobiles.com</li>
                  </ul>
                </div>
                <button
                  onClick={() => navigate("/portfolio/cm")}
                  className="group w-full flex justify-between items-center border bg-blue-500 text-white hover:bg-blue-600 border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  <span>View Projects</span>
                  <svg className="transition group-hover:translate-x-1 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <div className="relative px-4 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">&nbsp;</div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">© sarawutpe.github.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomDialog isOpen={isOpen} onClose={toggleDialog} title="Resume">
        <img src="resume.jpg" alt="resume" className=" h-full object-contain" />
      </CustomDialog>
    </>
  );
};

export default HomePage;
