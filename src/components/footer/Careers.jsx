import React from "react";

const Careers = () => {
  return (
    <section
      id="blog-section"
      className="py-10 sm:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl sm:text-5xl font-bold mb-10 sm:mb-16 text-center text-mainBlue">
          Careers
        </h2>
        <div className="flex justify-center items-center bg-gray-100 overflow-hidden rounded-lg p-5">
          <img
            src="https://ssim.ac.in/wp-content/uploads/career-1024x701.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Careers;
