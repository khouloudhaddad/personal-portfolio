"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_CONTENT = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex justify-between">
        <ul className="list-disc pl-2">
          <li className=" mb-3">PHP</li>
          <li className=" mb-3">Laravel / Symfony</li>
          <li className=" mb-3">Node.js</li>
          <li className=" mb-3">Express</li>
          <li className=" mb-3">Angular 8+</li>
          <li className=" mb-3">Vue 2+</li>
          <li className=" mb-3">React / Next</li>
          <li className=" mb-3">Prestshop 1.6+</li>
          <li className=" mb-3">WordPress</li>
        </ul>
        <ul className="list-disc pl-2">
          <li className=" mb-3">QA</li>
          <li className=" mb-3">C#</li>
          <li className=" mb-3">JAVA</li>
          <li className=" mb-3">Git / Gitlab / BitBucket</li>
          <li className=" mb-3">MySQL / PostgreSQL / MongoDB / Firebase</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className=" mb-3">FST, Software engineer (2009 - 2012)</li>
        <li className=" mb-3">IPEIM, Preparatory Diploma (Maths-Physics)</li>
        <li className=" mb-3">Bachelor's degree (Maths-Physics)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <div className="w-100 md:flex justify-between items-center mb-3">
            Team Leader and Full Stack Developer{" "}
            <span className="flex md:justify-between items-center text-primary-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>{" "}
              Azurreo |&nbsp;
              <span className="text-secondary-400 text-sm">8 mos</span>
            </span>
          </div>
        </li>
        <li>
          <div className="w-100 md:flex justify-between items-center mb-3">
            Full Stack Developer{" "}
            <span className="flex md:justify-between items-center text-primary-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>{" "}
              Atsu Studio |&nbsp;
              <span className="text-secondary-400 text-sm">3 yrs 2 mos</span>
            </span>
          </div>
        </li>
        <li>
          <div className="w-100 md:flex justify-between items-center mb-3">
            Full Stack Developer{" "}
            <span className="flex md:justify-between items-center text-primary-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>{" "}
              SwConsulting |&nbsp;
              <span className="text-secondary-400 text-sm">2 yrs 9 mos</span>
            </span>
          </div>
        </li>
        <li>
          <div className="w-100 md:flex justify-between items-center mb-3">
            PHP Developer{" "}
            <span className="flex md:justify-between items-center text-primary-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>{" "}
              Infogest développement |&nbsp;
              <span className="text-secondary-400 text-sm">8 mos</span>
            </span>
          </div>
        </li>
        <li>
          <div className="w-100 md:flex justify-between items-center mb-3">
            Software Engineer{" "}
            <span className="flex md:justify-between items-center text-primary-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>{" "}
              Prestige Concepts |&nbsp;
              <span className="text-secondary-400 text-sm">3 yrs</span>
            </span>
          </div>
        </li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="lg:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/about-image.png"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="About me"
          className="rounded-lg"
        />
        <div className="mt-4 lg:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg md:text-left text-justify">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with PHP, Laravel, JavaScript, React, Redux, Node.js,
            Express, PostgreSQL, HTML, CSS, SASS and Git. I am a quick learner
            and I always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_CONTENT.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
