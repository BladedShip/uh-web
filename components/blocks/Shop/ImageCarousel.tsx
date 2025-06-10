"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useShopContext } from "@/context";
import { ChevronLeftIcon, ChevronRightIcon, ImageIcon } from "@/components/icons";

interface ImageCarouselProps {
    images?: string[];
    autoplay?: boolean;
    autoplayDelay?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ autoplay = false, autoplayDelay = 4000 }) => {
    const { product } = useShopContext();
    const { color } = product;

    // Generate AVIF images
    const generateImageSrc = (index: number) => {
        return `/shop/rings/${color}/${index}.avif`;
    };

    const imageIndexes = Array.from({ length: 6 }, (_, index) => index + 1);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        containScroll: "trimSnaps",
        slidesToScroll: 1,
        skipSnaps: false,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Autoplay functionality
    useEffect(() => {
        if (!emblaApi || !autoplay) return;

        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, autoplayDelay);

        return () => clearInterval(interval);
    }, [emblaApi, autoplay, autoplayDelay]);

    const handleViewRealLifeImages = () => {
        // You can implement this functionality based on your needs
        console.log("View real life images clicked");
    };

    return (
        <div className="relative w-full aspect-[4/3] md:aspect-[5/4] md:sticky top-0">
            {/* Main Carousel */}
            <div className="relative h-full overflow-hidden" ref={emblaRef}>
                <div className="flex h-full">
                    {imageIndexes.map((imageIndex, index) => {
                        const imageSrc = generateImageSrc(imageIndex);
                        return (
                            <div
                                key={index}
                                className="h-full flex-shrink-0 w-[95%] md:w-full px-[3px] md:px-0"
                            >
                                <div className="relative w-full h-full overflow-hidden">
                                    <img
                                        src={imageSrc}
                                        alt={`Carousel image ${index + 1}`}
                                        className="w-full h-full object-cover "
                                        loading={index === 0 ? "eager" : "lazy"}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Buttons */}
            <ImageChevron onPress={scrollPrev} direction="left" />

            <ImageChevron onPress={scrollNext} direction="right" />

            {/* View Real Life Images Button */}
            <button
                onClick={handleViewRealLifeImages}
                className="absolute bottom-4 left-4 md:bottom-8 bg-white rounded-full px-4 py-2 flex items-center space-x-2.5 z-30"
                aria-label="View real life images"
            >
                <ImageIcon className="w-3 h-3 text-black" />
                <p className="text-black font-medium text-sm">View real life images</p>
            </button>
        </div>
    );
};

const ImageChevron = ({
    onPress,
    direction,
    className,
}: {
    onPress: () => void;
    direction: "left" | "right";
    className?: string;
}) => {
    return (
        <button
            onClick={onPress}
            className={`absolute ${
                direction === "left" ? "left-3" : "right-3"
            } top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center z-30 ${className}`}
        >
            {direction === "left" ? (
                <ChevronLeftIcon className="w-3 h-3 text-black" />
            ) : (
                <ChevronRightIcon className="w-3 h-3 text-black" />
            )}
        </button>
    );
};

export default ImageCarousel;
