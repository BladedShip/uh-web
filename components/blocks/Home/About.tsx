"use client";
import React, { useEffect, useState, useRef } from "react";
import { SectionWrapper } from "@/components/ui";

const ANIMATION_SPEED = 0.7;
const TRIGGER_POINT = 0.7;

const AboutSection = () => {
    const [visibleWords, setVisibleWords] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    const fullText =
        "Beautiful from the inside. Dive into the realm of design ingenuity. Take a closer look at the stunning interiors, meticulously engineered for a seamless integration of form and function.";
    const words = fullText.split(" ");

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            const triggerPoint = windowHeight * TRIGGER_POINT;

            if (sectionTop <= triggerPoint && sectionTop + sectionHeight >= 0) {
                const scrolledPastTrigger = Math.max(0, triggerPoint - sectionTop);
                
                const animationZone = sectionHeight / ANIMATION_SPEED;
                
                const rawProgress = scrolledPastTrigger / animationZone;
                const progress = Math.min(Math.max(rawProgress, 0), 1);

                const totalWords = words.length;
                const wordsToShow = Math.floor(progress * totalWords);

                setVisibleWords(wordsToShow);
            } else if (sectionTop > triggerPoint) {
                setVisibleWords(0);
            } else if (sectionTop + sectionHeight < 0) {
                setVisibleWords(words.length);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [words.length]);

    return (
        <SectionWrapper id="about" className="justify-center">
            <div ref={sectionRef} className="flex justify-center max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full">
                    {/* Section Header - Left Column */}
                    <div className="lg:col-span-2">
                        <div className="flex gap-1 items-center">
                            <div className="w-3 h-3 bg-black rounded-[2px]"></div>
                            <span className="text-sm font-medium uppercase leading-none tracking-normal text-[#797979]">
                                ABOUT
                            </span>
                        </div>
                    </div>

                    {/* Main Content - Right Column */}
                    <div className="lg:col-span-10">
                        <h2 className="text-[32px] lg:text-5xl font-medium tracking-[-0.03em] lg:tracking-tight leading-[40px] lg:leading-[65px]">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={`transition-colors duration-300 ${
                                        index < visibleWords ? "text-black" : "text-gray-400"
                                    }`}
                                >
                                    {word}
                                    {index < words.length - 1 ? " " : ""}
                                </span>
                            ))}
                        </h2>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
