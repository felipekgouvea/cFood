"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Sliders } from "../utils/sliders";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(
    //         () =>
    //             setCurrentSlide((prev) =>
    //                 prev === Slider.length - 1 ? 0 : prev + 1
    //             ),
    //         4000
    //     );
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
                <h1 className="text-2xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-7xl">
                    {Sliders[currentSlide].title}
                </h1>
                <button className="bg-red-500 text-white py-4 px-8 md:mb-10">
                    Faça seu pedido
                </button>
            </div>
            <div className="w-full flex-1 relative">
                <Image
                    src={Sliders[currentSlide].image}
                    alt="Slider Principal"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
};

export default Slider;
