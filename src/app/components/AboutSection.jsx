"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>C</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Native</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.S. in Computer Science, Certificate in New Media</li>
        <li>University of Georgia</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Using the Community Cyber Security Maturity Model (CCSMM) to Develop a Cyber Security Program</li>
        <li>edX Verified Certificate for Cybersecurity for Critical Urban Infrastructure</li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          👋 Hello! My name is Eva Daniel and I'm studying Computer Science and New Media at the University of Georgia.
          <br/><br/>
          🔒 With a keen interest in cybersecurity, I'm dedicated to safeguarding the digital world. I believe that a strong defense is crucial in our interconnected society, and I'm excited to contribute to the cybersecurity community's ongoing mission to protect data and privacy.
          <br/><br/>
          💻 I'm also captivated by the art of Front-End Development. The power to craft beautiful, user-friendly interfaces that enrich the digital experience is a craft I'm eager to master. I'm committed to creating designs that not only look good but also provide seamless and enjoyable user experiences.
          <br/><br/>
          🌟 Currently exploring the intersections of technology, security, and design. Let's connect and share our experiences in the ever-evolving world of Computer Science!
          </p>
          <div className="flex flex-row justify-start mt-8">
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
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
