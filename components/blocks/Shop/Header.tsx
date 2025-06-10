"use client";

import React, { useState, useEffect, useRef } from "react";
import { useShopContext } from "@/context";

const BASE_PRICE = 28499;

// Placeholder array for text carousel
const carouselMessages = [
    "Get up to ₹10,000 for your trade-in",
    "Free shipping on all orders",
    "30-day money back guarantee",
    "Extended warranty available",
    "Buy now, pay later options",
];

const Header = () => {
    const { product } = useShopContext();
    const { size } = product;
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Calculate dispatch date (same logic as Summary)
    const dispatchDays = size === "kit" ? 10 : 3;
    const dispatchDate = new Date(Date.now() + dispatchDays * 24 * 60 * 60 * 1000);
    const formattedDispatchDate = dispatchDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
    });

    // Auto-scroll carousel
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const nextIndex = (currentMessageIndex + 1) % carouselMessages.length;
                const scrollContainer = scrollContainerRef.current;

                // Scroll by the width of one card plus gap
                const cardElement = scrollContainer.children[0] as HTMLElement;
                const cardWidth = cardElement?.offsetWidth || 0;
                const gap = 12; // 3 * 4px (gap-3)

                scrollContainer.scrollTo({
                    left: nextIndex * (cardWidth + gap),
                    behavior: "smooth",
                });

                setCurrentMessageIndex(nextIndex);
            }
        }, 4000); // Change message every 4 seconds

        return () => clearInterval(interval);
    }, [currentMessageIndex]);

    // Handle scroll snap detection
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollContainer = scrollContainerRef.current;
            const cardElement = scrollContainer.children[0] as HTMLElement;
            const cardWidth = cardElement?.offsetWidth || 0;
            const gap = 12;
            const newIndex = Math.round(scrollContainer.scrollLeft / (cardWidth + gap));
            setCurrentMessageIndex(newIndex);
        }
    };

    return (
        <div className="relative px-4 py-6 bg-white">
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-200 bg-white">
                <span className="text-base">🇮🇳</span>
                <span className="font-semibold text-sm text-gray-700">IN</span>
            </div>

            <div className="">
                <h1 className="text-[40px] font-semibold tracking-[-0.02em] leading-tight mb-1">Ring AIR</h1>
                <p className="text-[28px] tracking-[-0.02em] leading-tight mb-6 md:text-[32px]">
                    ₹{BASE_PRICE.toLocaleString()}
                </p>
                <p className="text-sm mb-8 font-normal md:text-base">
                    Dispatched by : <span className="font-semibold">{formattedDispatchDate}</span>
                    {size === "kit" && <span> (after size selection)</span>}
                </p>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex gap-3 overflow-x-scroll scrollbar-none pb-1"
                        style={{
                            scrollSnapType: "x mandatory",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {carouselMessages.map((message, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-lg px-4 py-4 flex items-center gap-2 w-[80%] flex-shrink-0 justify-between"
                                style={{ scrollSnapAlign: "start" }}
                            >
                                <p className="text-sm font-medium text-gray-800 md:text-base">{message}</p>
                                <PlusIcon />
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

const PlusIcon = () => (
    <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center flex-shrink-0">
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600"
        >
            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    </div>
);

export default Header;
