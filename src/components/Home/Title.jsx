import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen  text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 text-4xl">Fresh Takes on the Latest Sports News</h1>
          <h2 className="mb-2 text-4xl text-[#3389FF] md:text-6xl">
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                GArena <span className="text-3xl md:text-5xl"></span>
              </span>
              <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-white w-full animate-type will-change`}"></span>
            </span>
          </h2>
          <p className="py-4 text-gray-600 text-xl sm:max-w-[80%] m-auto">
            Basketball - Badminton - volleyball - football
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
