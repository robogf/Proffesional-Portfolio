import React from "react"; 

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"> 
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <span className="text-green-400">Angel Matias </span>. <br className="hidden lg:inline-block" /> Everyday I am trying to learn how to develop.
        </h1>
        <p className="mb-8 leading-relaxed">
            Hello there, thank you for visiting my portfolio. Here you can learn what ive worked on so far in terms of projects. My first experience with full stack
            web development started with UC Berkley Extension. I learned how to use HTML, CSS, and Javascript. I also learned how to use React and Node.js. I am currently
            learning how to use MongoDB and Express.js.
            Thank you for checking out my portfolio. I hope you enjoy it.
         </p>
        <div className="flex justify-center">
            <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Contact Me</a>
            <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Projects</a>
        </div>
        <div>
        <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
        </div>
      </div>
    </section>
  );
};
export default About;