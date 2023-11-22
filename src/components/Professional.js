import React from "react";

const skillsData = [
  {
    title: "Full Stack Development",
    description:
      "Proven proficiency in front-end and back-end development with a strong focus on creating seamless and user-friendly web applications. Extensive experience working with frameworks and languages such as React, Node.js, Flask, Python, and C#. Successfully designed, developed, and hosted comprehensive applications, including a dynamic organizational tree and an innovative world-building platform leveraging AI. These projects demonstrate a deep understanding of both client-side and server-side development.",
    image: process.env.PUBLIC_URL + "/images/fullstack.jpg",
  },
  {
    title: "Databases",
    description:
      "Solid understanding of SQL with hands-on experience using PostgreSQL, a powerful open-source relational database. Proficiency in database design, including schema creation and optimization. Skilled in executing complex queries, ensuring efficient data retrieval and manipulation for applications.",
    image: process.env.PUBLIC_URL + "/images/databases.jpg",
  },
  {
    title: "Backend Development",
    description:
      "Skilled in server-side programming with a focus on creating robust and efficient RESTful APIs. Practical knowledge of developing backend services using Python and JavaScript. Specialization in process and organizational enhancements to improve the performance and scalability of backend systems.",
    image: process.env.PUBLIC_URL + "/images/backend.jpg",
  },
  {
    title: "Cloud Computing",
    description:
      "Experienced in deploying and managing applications on cloud platforms, including Amazon Web Services (AWS). Utilized AWS services for hosting applications, ensuring high availability and scalability. Proficiency in using GitHub Pages alongside Supabase and Fly.io for seamless server management and deployment, demonstrating expertise in DevOps practices.",
    image: process.env.PUBLIC_URL + "/images/cloud.jpg",
  },
  {
    title: "AI and Machine Learning",
    description:
      "Proficient in leveraging AI for creative and innovative solutions in application development. Successfully built AI-driven projects for generating narratives, worlds, and events. Mastery in using OpenAI's API, including GPT-3.5 and GPT-4, integrated with advanced prompt engineering techniques to achieve consistent and reliable AI output.",
    image: process.env.PUBLIC_URL + "/images/ai_ml.jpg",
  },
  {
    title: "Prompt Engineering",
    description:
      "In-depth experience in designing effective prompts for conversational AI and language models. Developed reliable AI interactions by utilizing complex prompt constructs. Proficient in facilitating advanced program functionality through prompt engineering, ensuring the desired outcomes in AI-driven projects.",
    image: process.env.PUBLIC_URL + "/images/prompt_engineering.jpg",
  },
];

const SkillSection = ({ title, description, image, isOddIndex }) => (
  <div className="skill-section">
    {isOddIndex ? (
      <>
        <img src={image} alt={title} />
        <div className="text-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </>
    ) : (
      <>
        <div className="text-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <img src={image} alt={title} />
      </>
    )}
  </div>
);

const Professional = () => (
  <div className="skills-container">
    {skillsData.map((skill, index) => (
      <React.Fragment key={index}>
        <SkillSection {...skill} isOddIndex={index % 2 !== 0} />
        {index < skillsData.length - 1 && <hr />}
      </React.Fragment>
    ))}
  </div>
);

export default Professional;
