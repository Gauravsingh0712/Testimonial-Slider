import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col wi[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonial</h1>
        <div className="bg-violet-400 h-[5px] w-[1/5] mt-1"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
