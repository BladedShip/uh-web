import React from "react";
import { SectionWrapper } from "@/components/ui";

type Props = {};

const AboutSection = (props: Props) => {
    return (
        <SectionWrapper id="about" className="flex items-center">
            <div className="flex justify-center max-w-7xl mx-auto px-4 lg:px-8">
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
                        <h2 className="text-5xl font-medium tracking-tight" style={{ lineHeight: "65px" }}>
                            <span className="text-black">
                                Beautiful from the inside. Dive into the realm of design{" "}
                            </span>
                            <span className="text-gray-400">
                                ingenuity. Take a closer look at the stunning interiors, meticulously engineered for a
                                seamless integration of form and function.
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
