"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Only update when hero might still be visible
            if (currentScrollY < window.innerHeight * 1.5) {
                setScrollY(currentScrollY);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section id="hero" className="h-[80vh] md:h-screen w-full relative p-2 py-4">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                    src="/hero-bg.png"
                    alt="Hero Image"
                    className="w-full h-full object-cover"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                />

                <div className="absolute inset-0 flex flex-col items-center text-center text-white px-8 pt-24 md:pt-[20vh]">
                    <p className="text-[11px] md:text-[14px] font-medium tracking-[0.05em] md:tracking-[0.2em] mb-4 text-white uppercase">
                        World&apos;s Most Comfortable Sleep Tracker
                    </p>

                    <h1 className="text-[32px] md:text-[48px] font-medium tracking-[-0.05em] mb-6 text-white">
                        Ultrahuman Ring AIR
                    </h1>

                    <p className="text-[12px] md:text-[14px] font-medium md:font-normal mb-8 tracking-[-0.01em] text-white opacity-40 max-w-lg">
                        Accurately tracks sleep, HRV, temperature, and movement with daily actionable health insights.
                    </p>

                    <Link href="/shop" className="cursor-pointer">
                        <button className="bg-black text-white px-[20px] py-[14px] md:px-[32px] md:py-[16px] rounded-[38px] md:rounded-[40px] font-normal text-[12px] md:text-[14px] leading-[100%] md:leading-[20px] tracking-[0px] md:tracking-[1%] uppercase active:border-none">
                            Buy Now
                        </button>
                    </Link>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[45%]">
                    <div className="min-w-64 min-h-64 w-full h-full max-w-[48vw] relative">
                        <img
                            src="/ring.png"
                            alt="Ultrahuman Ring AIR"
                            className="w-full h-full object-contain transform"
                            style={{
                                transform: `translateY(${scrollY * -0.3}px) rotate(-60deg)`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
