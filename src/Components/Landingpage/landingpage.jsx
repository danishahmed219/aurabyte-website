import React from 'react';
import BackGround from '../../assets/Section.png';
import AuraLogo from '../../assets/AuraLogo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const LandingPage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-full flex flex-col justify-between text-[#D3D3D3] relative"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Logo at the Top */}
      <div className="flex justify-center items-center mt-[74px] sm:mt-[30px]">
        <img
          src={AuraLogo}
          alt="AuraLogo"
          className="h-[30px] w-[205.08px] md:h-17 sm:h-10"
        />
      </div> 

      {/* Center Content */}
      <div className="flex flex-col items-center text-center px-4">
       <h1
          className="text-[40px] sm:text-[50px] md:text-[85px] text-white leading-[1.2] md:leading-[90.82px] 
                     tracking-[-1%] text-center w-[90%] md:w-[1200px] absolute top-[15%] md:top-[259.21px] 
                     left-[50%] transform -translate-x-1/2"
        >
          Website Launching Soon!
        </h1> 

        <p
          className="text-[27.29px] font-[400] leading-[33.43px] tracking-[-0.25px] text-center mb-6 
                     w-[90%] md:w-[1102px] h-auto absolute top-[35%] md:top-[385.39px] left-[50%] transform -translate-x-1/2 
                     text-base sm:text-lg md:text-[24.29px] leading-relaxed"
        >
          The future of software is almost here. Stay tuned for our launch.
        </p>
 

      </div>

      {/* Social Media Links */}
      <div
        className="flex gap-[13.35px] absolute top-[70%] md:top-[573px] left-[50%] transform -translate-x-1/2 
                     sm:gap-[8px] sm:top-[630px]"
      >
        {/* Facebook Icon */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl md:text-3xl text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 
                     rounded-full border-2 border-purple-800 hover:border-purple-600 p-2 sm:p-3 md:p-5 flex items-center justify-center 
                     transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 
                     sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] shadow-md hover:shadow-lg"
        >
          <i className="fa-brands fa-facebook-f fa-2xs"></i>
        </a>

        {/* Instagram Icon */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl md:text-3xl text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 
                     rounded-full border-2 border-purple-800 hover:border-purple-600 p-2 sm:p-3 md:p-4 flex items-center justify-center 
                     transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 
                     sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] shadow-md hover:shadow-lg"
        >
          <i className="fa-brands fa-instagram fa-2xs"></i>
        </a>

        {/* Twitter Icon */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl md:text-3xl text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 
                     rounded-full border-2 border-purple-800 hover:border-purple-600 p-2 sm:p-3 md:p-4 flex items-center justify-center 
                     transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 
                     sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] shadow-md hover:shadow-lg"
        >
          <i className="fa-brands fa-twitter fa-2xs"></i>
        </a>

       {/* facebook icons */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl md:text-3xl text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 
                     rounded-full border-2 border-purple-800 hover:border-purple-600 p-2 sm:p-3 md:p-5 flex items-center justify-center 
                     transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 
                     sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] shadow-md hover:shadow-lg"
        >
          <i className="fa-brands fa-facebook-f fa-2xs"></i>
        </a>
      </div>

      {/* Footer Link */}
      <div className="text-center mb-10 sm:mb-14">
        <a
          href="https://aurabyte.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-lg sm:text-2xl md:text-2xl text-[#C0C0C0]"
        >
          aurabyte.io
        </a>
      </div>
    </div>
  );
};
