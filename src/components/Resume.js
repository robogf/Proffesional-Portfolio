import React from "react";

function Resume() {
    return (
        <section id="resume">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
                My Resume
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Here is a link to my resume.
            </p>
            </div>
        </div>
        <div className="flex flex-wrap lg:wg-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-6 sm:w-1/2 ">
            <div className="bg-gray-800 rounded flex p-4  items-center">
                <span className="title-font font-medium text-white">
                <a href="https://drive.google.om/file/d/1-1ZQ0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z/view?usp=sharing">
                    Click Here
                </a>
                </span>
            </div>
            </div>
        </div>
        </section>
    );
}
export default Resume;