"use client";

import { SectionWrapper } from "@/components/ui";
import { FEATURES } from "@/constants";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import React from "react";

type Props = {};

const SCROLL_INTERVAL = 10000;
const THROTTLE_DELAY = 16; // ~60fps

const throttle = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastExecTime = 0;
    return (...args: any[]) => {
        const currentTime = Date.now();

        if (currentTime - lastExecTime > delay) {
            func(...args);
            lastExecTime = currentTime;
        } else {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
};

const FeatureCard = React.memo(
    ({ title, description, image, tags, features, active }: Feature & { active: boolean }) => (
        <div 
            className="bg-white p-0 overflow-hidden shadow-none md:min-w-full md:snap-start md:flex md:flex-row-reverse md:gap-8 md:mt-20"
            style={{ contain: 'layout style paint' }}
        >
            <div className="relative w-full flex items-center justify-center bg-black rounded-[16px] md:w-3/5 md:flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="object-contain w-full rounded-2xl aspect-[1.45/1] md:aspect-[1.43/1]"
                    loading="lazy"
                    decoding="async"
                />
                {tags?.[0] && (
                    <div className="absolute top-4 right-4 px-5 py-2 md:px-6 md:py-[10px] rounded-full text-[8px] md:text-[15px] font-medium bg-[#2AFF8E] text-black uppercase">
                        {tags[0]}
                    </div>
                )}
            </div>
            <div className="flex flex-col mt-6 flex-1 md:w-2/5 md:px-0 md:py-0 md:mt-0 md:justify-center">
                <div className="font-medium text-[20px] tracking-[-0.03em] text-[#202020] leading-[35px] md:text-[20px] md:font-medium md:leading-[40px] md:tracking-[-0.02em] md:mb-4 mb-3">
                    {title}
                </div>
                <div className="hidden md:block md:mb-6">
                    <ProgressBar active={active} />
                </div>
                <div className="font-normal text-[16px] tracking-[-0.01em] text-[#202020] leading-[22px] md:text-[18px] md:font-normal md:leading-[28px] md:mb-12 md:max-w-[400px]">
                    {description}
                </div>
                {features?.length > 0 && (
                    <div className="hidden md:flex flex-col gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="text-[18px] font-normal leading-[24px] text-[#202020] opacity-60">
                                {f}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    ),
    (prevProps, nextProps) => {
        return (
            prevProps.active === nextProps.active &&
            prevProps.title === nextProps.title &&
            prevProps.description === nextProps.description &&
            prevProps.image === nextProps.image
        );
    }
);

const ProgressBar = React.memo(({ active }: { active: boolean }) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (active) {
            // Reset animation
            setShouldAnimate(false);
            const timer = setTimeout(() => {
                setShouldAnimate(true);
            }, 50);

            return () => clearTimeout(timer);
        } else {
            setShouldAnimate(false);
        }
    }, [active]);

    return (
        <div className="w-full h-[2px] bg-[#E5E5E5] relative overflow-hidden">
            <div
                className="absolute top-0 left-0 h-[2px] bg-black transition-all duration-300 ease-linear will-change-auto"
                style={{
                    width: shouldAnimate ? "100%" : "0%",
                    transitionDuration: shouldAnimate ? `${SCROLL_INTERVAL}ms` : "300ms",
                    transitionTimingFunction: shouldAnimate ? "linear" : "ease-linear",
                }}
            />
        </div>
    );
});



const useAutoScroll = (
    scrollRef: React.RefObject<HTMLDivElement | null>,
    numFeatures: number,
    onActiveChange: (idx: number) => void
) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const currentIdxRef = useRef(0);
    const isUserScrollingRef = useRef(false);

    const scrollToCard = useCallback(
        (idx: number) => {
            const container = scrollRef.current;
            if (!container) return;

            const card = container.children[idx] as HTMLElement;
            if (card) {
                container.scrollTo({
                    left: card.offsetLeft,
                    behavior: "smooth",
                });
                currentIdxRef.current = idx;
                onActiveChange(idx);
            }
        },
        [onActiveChange]
    );

    const startAutoScroll = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (!isUserScrollingRef.current) {
                const nextIdx = (currentIdxRef.current + 1) % numFeatures;
                scrollToCard(nextIdx);
            }
        }, SCROLL_INTERVAL);
    }, [numFeatures, scrollToCard]);

    const handleUserScroll = useCallback(
        throttle(() => {
            const container = scrollRef.current;
            if (!container) return;

            // Set user scrolling flag
            isUserScrollingRef.current = true;

            // Find most visible card using a more efficient method
            const containerRect = container.getBoundingClientRect();
            const children = Array.from(container.children) as HTMLElement[];

            let maxVisibleArea = 0;
            let visibleIdx = 0;

            children.forEach((child, idx) => {
                const rect = child.getBoundingClientRect();
                const visibleWidth = Math.max(
                    0,
                    Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left)
                );

                if (visibleWidth > maxVisibleArea) {
                    maxVisibleArea = visibleWidth;
                    visibleIdx = idx;
                }
            });

            if (visibleIdx !== currentIdxRef.current) {
                currentIdxRef.current = visibleIdx;
                onActiveChange(visibleIdx);
            }

            // Reset auto-scroll after user stops scrolling
            startAutoScroll();

            // Clear user scrolling flag after a short delay
            setTimeout(() => {
                isUserScrollingRef.current = false;
            }, 100);
        }, THROTTLE_DELAY),
        [startAutoScroll, onActiveChange]
    );

    return { scrollToCard, handleUserScroll, startAutoScroll };
};

// Optimized desktop detection with reduced re-renders
const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia("(min-width: 768px)").matches;
        }
        return false;
    });

    useEffect(() => {
        const media = window.matchMedia("(min-width: 768px)");
        
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDesktop(e.matches);
        };

        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    }, []);

    return isDesktop;
};

const FeaturesSection = (props: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const isDesktop = useIsDesktop();

    const numFeatures = useMemo(() => FEATURES.length, []);

    const { handleUserScroll, startAutoScroll } = useAutoScroll(scrollRef, numFeatures, setActiveIdx);

    useEffect(() => {
        if (!isDesktop) return;

        const container = scrollRef.current;
        if (!container) return;

        container.addEventListener("scroll", handleUserScroll, { passive: true });

        startAutoScroll();
        setActiveIdx(0);

        return () => {
            container.removeEventListener("scroll", handleUserScroll);
        };
    }, [isDesktop, handleUserScroll, startAutoScroll]);

    return (
        <SectionWrapper id="features">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full gap-[48px] lg:gap-[90px]">
                <h2 className="text-[36px] lg:text-[45px] font-medium tracking-[-0.03em] lg:tracking-tight leading-[40px] lg:leading-[65px]">
                    Beautiful from the inside
                </h2>
                <div
                    ref={scrollRef}
                    className="flex flex-col gap-[40px] mt-8 md:flex-row md:overflow-x-auto md:flex-nowrap md:gap-[40px] scrollbar-none md:snap-x md:snap-mandatory"
                    style={{ 
                        contain: 'layout style paint',
                        willChange: 'scroll-position'
                    }}
                >
                    {FEATURES.map((feature, idx) => (
                        <FeatureCard key={`${feature.title}-${idx}`} {...feature} active={activeIdx === idx} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default FeaturesSection;
