import React, { useRef, useEffect } from 'react';
import skillBeltVideo from '../assets/skill-belt.mp4';
import reactLogo from '../assets/react.svg';
import aeLogo from '../assets/ae.svg';
import tailwindLogo from '../assets/tailwind.svg';
import cppLogo from '../assets/Cpp.svg';
import DavinciLogo from '../assets/Davinci.svg';
import FigmaLogo from '../assets/Figma.svg';
import HtmlLogo from '../assets/Html.svg';
import jsLogo from '../assets/js.svg';
import pythonLogo from '../assets/Python.svg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Skillcarousel = () => {
    const logos = [
        reactLogo,
        aeLogo,
        tailwindLogo,
        cppLogo,
        DavinciLogo,
        FigmaLogo,
        HtmlLogo,
        jsLogo,
        pythonLogo,
    ];

    const carouselRef = useRef(null);

    // Scroll functions
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    // Infinite loop logic
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const handleScroll = () => {
            if (carousel.scrollLeft === 0) {
                // If at the start of the duplicated content, reset to the end of the original content
                carousel.scrollLeft = carousel.scrollWidth / 2;
            } else if (
                carousel.scrollLeft + carousel.offsetWidth >=
                carousel.scrollWidth
            ) {
                // If at the end of the duplicated content, reset to the start of the original content
                carousel.scrollLeft = carousel.scrollWidth / 2 - carousel.offsetWidth;
            }
        };

        carousel.addEventListener('scroll', handleScroll);
        return () => carousel.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative h-screen w-full">
            {/* Background video */}
            <video
                className="absolute top-0 left-0 h-full w-full object-cover opacity-90"
                src={skillBeltVideo}
                autoPlay
                loop
                muted
                playsInline
            ></video>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-start pt-[150px] px-[90px] h-full text-white">
                <h1 className="font-[velvenda] text-[90px] font-bold">My Skills</h1>

                {/* Arrow controls */}
                <div className="absolute top-[300px] flex w-full justify-between px-10">
                    <button onClick={scrollLeft} className="p-3 bg-black bg-opacity-50 rounded-full">
                        <ChevronLeft size={24} color="white" />
                    </button>
                    <button onClick={scrollRight} className="p-3 bg-black bg-opacity-50 rounded-full">
                        <ChevronRight size={24} color="white" />
                    </button>
                </div>

                {/* Horizontal carousel */}
                <div
                    ref={carouselRef}
                    className="w-full mt-[100px] flex gap-10 overflow-x-auto scrollbar-hide"
                >
                    {/* Duplicate logos for infinite loop */}
                    {[...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt={`Logo ${index}`} className="h-54 w-auto" />
                    ))}
                </div>
            </div>

            {/* Hide scrollbar */}
            <style>
                {`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                `}
            </style>
        </div>
    );
};

export default Skillcarousel;
