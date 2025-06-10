"use client";

import { useState } from "react";

import { VariantWrapper, CardWrapper } from "@/components/ui";
import { useShopContext } from "@/context";
import { CheckMarkIcon, ChevronRightIcon, DispatchIcon } from "@/components/icons";
import { cn } from "@/utils";

type Props = {};

const SizingKit = (props: Props) => {
    const { product, setSize } = useShopContext();
    const { size } = product;
    const sizingFeatures = [
        "Perfect ring fit—no guesswork",
        "Yours to keep and share—no returns required",
        "Eco-friendly materials—better for you and the planet",
    ];

    const availableSizes = Array.from({ length: 10 }, (_, i) => i + 5);

    const [areSizesOpen, setAreSizesOpen] = useState(false);
    return (
        <VariantWrapper title="Size." subtitle="Use the sizing kit to get it right the first time.">
            <CardWrapper
                isSelected={size === "kit"}
                onClick={() => {
                    setAreSizesOpen(false);
                    if (size !== "kit") setSize("kit");
                }}
            >
                <div className="flex gap-2 w-full">
                    <img src="/shop/sizing-kit.avif" alt="Sizing Kit" className="h-16 w-16 object-cover" />
                    <div className="flex-1 flex flex-col gap-3">
                        <div className="flex justify-between w-full">
                            <p className="font-semibold text-base tracking-[-0.02em]">Sizing Kit</p>
                            <p className="font-semibold text-base tracking-[-0.02em]">FREE</p>
                        </div>
                        <p className="text-sm text-left text-gray-500 tracking-[-0.03em] leading-[1.2]">
                            Choose the right size with the ring samples, ensuring a perfect fit for the best data
                            accuracy.
                        </p>
                        <div className="flex flex-col gap-2">
                            {sizingFeatures.map((feature) => (
                                <div className="flex gap-2 items-center">
                                    <CheckMarkIcon className="w-4 h-4 flex-shrink-0" />
                                    <p key={feature} className="text-xs text-left font-medium">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardWrapper>

            <button
                className="flex gap-2 items-center w-full justify-center my-2"
                onClick={() => setAreSizesOpen(!areSizesOpen)}
            >
                <p className="text-base text-left font-semibold tracking-[-0.03em] leading-[1.2]">
                    I have a ring sizing kit
                </p>
                <ChevronRightIcon className={cn("w-3 h-3 flex-shrink-0 rotate-90", areSizesOpen && "rotate-270")} />
            </button>
            {areSizesOpen && (
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <DispatchIcon className="w-4 h-4 flex-shrink-0" />
                        <p className="text-sm text-left tracking-[-0.03em] leading-[1.2]">
                            Dispatched by :{" "}
                            <span className="font-semibold">
                                {new Date(
                                    Date.now() + (size === "kit" ? 6 : 3) * 24 * 60 * 60 * 1000
                                ).toLocaleDateString("en-US", {
                                    day: "2-digit",
                                    month: "short",
                                })}{" "}
                            </span>
                            {size === "kit" ? `(after size selection)` : ``}
                        </p>
                    </div>
                    <p className="text-sm text-left tracking-[-0.03em] leading-[1.2] py-4">
                        Not a 100% sure? Go for the sizing kit. Nailing the fit the first time helps you and the Earth.
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                        {availableSizes.map((mapSize) => (
                            <CardWrapper
                                isSelected={size === mapSize.toString()}
                                onClick={() =>
                                    setSize(
                                        mapSize.toString() as
                                            | "5"
                                            | "6"
                                            | "7"
                                            | "8"
                                            | "9"
                                            | "10"
                                            | "11"
                                            | "12"
                                            | "13"
                                            | "14"
                                    )
                                }
                                className="flex-1"
                            >
                                <p className="text-sm text-left tracking-[-0.03em] leading-[1.2] font-semibold">
                                    {mapSize}
                                </p>
                            </CardWrapper>
                        ))}
                    </div>
                </div>
            )}
        </VariantWrapper>
    );
};

export default SizingKit;
