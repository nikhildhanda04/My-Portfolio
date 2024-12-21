import React, { useState } from 'react';

const Herosection = () => {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div className="flex h-screen overflow-hidden">
      <div 
        className={`relative overflow-hidden transition-all duration-700 ease-in-out
          ${hoveredSide === 'left' ? 'w-[85%] pt-[60px] pl-[200px] px-[50px]' : hoveredSide === 'right' ? 'w-[15%]' : 'w-1/2'}`}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-[#00403B]">
          <h2 
            className="absolute text-shadow-custom font-[velvenda] pt-[100px] text-[#7DCFEA] font-bold transition-all duration-700 ease-in-out"
            style={{
              fontSize: hoveredSide === 'right' ? '40px' : '100px',
              left: hoveredSide === 'left' ? '300px' : '50%',
              top: hoveredSide === 'left' ? '60px' : '50%',
              transform: hoveredSide === 'left' 
                ? 'translateX(0) translateY(0)' 
                : hoveredSide === 'right'
                  ? 'translate(-50%, -50%) rotate(90deg)'
                  : 'translate(-50%, -50%)',
            }}
          >
            Coding
          </h2>
          <div className={`absolute inset-0 flex flex-col px- items-start justify-center transition-opacity duration-700 ${hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'}`}>
            <h3 
              className="text-white text-shadow-custom text-[80px] pt-[200px] pl-[200px] mb-[-20px] font-[gothic] transition-all duration-700 ease-in-out"
              style={{
                transform: hoveredSide === 'left' ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              hey! I am Nikhil, an
            </h3>
            <p 
              className="text-white text-shadow-custom text-[80px] leading-[90px] pl-[200px] mb-6 font-[gothic] max-w-[60%] transition-all duration-700 ease-in-out"
              style={{
                transform: hoveredSide === 'left' ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              aspiring developer and software engineer.
            </p>
            <button 
              className="px-6 py-2 rounded-full ml-[300px] bg-[#7DCFEA] text-white hover:bg-[#7DCFEA]/80 transition-all duration-300 ease-in-out"
              style={{
                transform: hoveredSide === 'left' ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              click for more
            </button>
          </div>
        </div>
        <img
          src="/src/assets/coding.svg"
          alt="Coding SVG Half"
          className="absolute transition-all duration-700 ease-in-out"
          style={{
            opacity: hoveredSide === 'right' ? 0 : 1,
            transform: `scale(${hoveredSide === 'left' ? 1.2 : 1})`,
            bottom: hoveredSide === 'left' ? '-5%' : '-2%',
            right: hoveredSide === 'left' ? '5%' : '-37%',
            height: hoveredSide === 'left' ? '90%' : '81%',
            zIndex: hoveredSide === 'left' ? 10 : 0,
          }}
        />
      </div>

      <div 
        className={`relative overflow-hidden transition-all duration-700 ease-in-out
          ${hoveredSide === 'right' ? 'w-[85%] pt-[60px] px-[50px]' : hoveredSide === 'left' ? 'w-[15%]' : 'w-1/2'}`}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-[#1E155F]">
          <h2 
            className="absolute text-shadow-custom font-[velvenda] pt-[100px] text-[#FF55AA] font-bold transition-all duration-700 ease-in-out"
            style={{
              fontSize: hoveredSide === 'left' ? '40px' : '100px',
              right: hoveredSide === 'right' ? '300px' : '50%',
              top: hoveredSide === 'right' ? '60px' : '50%',
              transform: hoveredSide === 'right' 
                ? 'translateX(0) translateY(0)' 
                : hoveredSide === 'left'
                  ? 'translate(50%, -50%) rotate(-90deg)'
                  : 'translate(50%, -50%)',
            }}
          >
            Creative
          </h2>
          <div className={`absolute inset-0 flex flex-col items-end justify-center transition-opacity duration-700 ${hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'}`}>
            <h3 
              className="text-[#ffff] text-shadow-custom text-[80px] pt-[200px] pr-[250px] mb-4 font-[gothic] transition-all duration-700 ease-in-out"
              style={{
                transform: hoveredSide === 'right' ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              hey! I am Nikhil, a
            </h3>
            <p 
              className="text-[#ffff] text-shadow-custom text-[80px] mt-[-40px] mb-6 font-[gothic] pr-[250px] text-right max-w-[50%] leading-[90px] transition-all duration-700 ease-in-out"
              style={{
                transform: hoveredSide === 'right' ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              professional video editor. 
            </p>
            <button 
              className="px-6 py-2 rounded-full bg-[#152E83] mr-[300px] text-white hover:bg-[#152E83]/80 transition-all duration-300 ease-in-out"
              style={{
                transform: hoveredSide === 'right' ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              click for more
            </button>
          </div>
        </div>
        <img
          src="/src/assets/creative.svg"
          alt="Creative SVG Half"
          className="absolute transition-all duration-700 ease-in-out"
          style={{
            opacity: hoveredSide === 'left' ? 0 : 1,
            transform: `scale(${hoveredSide === 'right' ? 1.2 : 1})`,
            bottom: hoveredSide === 'right' ? '-0%' : '-11%',
            left: hoveredSide === 'right' ? '5%' : '-48%',
            height: hoveredSide === 'right' ? '90%' : '102%',
            zIndex: hoveredSide === 'right' ? 10 : 0,
          }}
        />
      </div>
    </div>
  );
};

export default Herosection;

