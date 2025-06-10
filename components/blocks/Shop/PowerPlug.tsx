"use client";

import React from "react";
import { VariantWrapper, CardWrapper } from "@/components/ui";
import { useShopContext } from "@/context";
import { PRICE_ADDONS } from "@/constants";
import { cn } from "@/utils";

const PowerPlug = () => {
    const { product, setPowerPlug } = useShopContext();
    const selectedPowerPlug = product.powerPlug;

    return (
        <VariantWrapper title="PowerPlug." subtitle="Protect your heart health.">
            <p className="text-sm text-gray-500 tracking-[-0.03em] leading-[1.2] mb-4 md:text-base">
                Monitor night time heart trends to evaluate your heart&apos;s response to stressors.
            </p>

            <div className="flex flex-col gap-4">
                <CardWrapper
                    isSelected={selectedPowerPlug === "cardio-1"}
                    onClick={() => setPowerPlug("cardio-1")}
                    className="justify-between overflow-hidden"
                >
                    <div className="flex justify-between items-center w-full">
                        <p className="text-sm font-semibold tracking-[-0.03em] leading-[1.2] md:text-base">
                            Cardio Adaptability - 1 Year
                        </p>
                        <p className="text-sm font-semibold tracking-[-0.03em] leading-[1.2] md:text-base">
                            ₹{PRICE_ADDONS.powerPlug["cardio-1"].toLocaleString()}
                        </p>
                    </div>
                </CardWrapper>

                <CardWrapper
                    isSelected={selectedPowerPlug === "cardio-2"}
                    onClick={() => setPowerPlug("cardio-2")}
                    className="relative justify-between overflow-hidden"
                >
                    <div
                        className={cn(
                            "absolute top-0 left-0 px-4 py-[6px] rounded-br-lg",
                            selectedPowerPlug === "cardio-2" ? "bg-white" : "bg-gray-200"
                        )}
                    >
                        <p className="text-[8px] font-semibold tracking-[0.2em] leading-[1.2] text-black">
                            RECOMMENDED
                        </p>
                    </div>
                    <div className="w-full pt-3">
                        <div className="flex justify-between items-center w-full">
                            <p className="text-sm font-semibold tracking-[-0.03em] leading-[1.2] md:text-base">
                                Cardio Adaptability - 2 Year
                            </p>
                            <p className="text-sm font-semibold tracking-[-0.03em] leading-[1.2] md:text-base">
                                ₹{PRICE_ADDONS.powerPlug["cardio-2"].toLocaleString()}
                            </p>
                        </div>
                        <div className="mt-2 w-full flex justify-start">
                            <span className="bg-[#0EFF6E] px-1 py-[2px] text-[10px] font-semibold leading-[1.2] rounded-md">
                                Save 20%
                            </span>
                        </div>
                    </div>
                </CardWrapper>

                <CardWrapper isSelected={selectedPowerPlug === "none"} onClick={() => setPowerPlug("none")}>
                    <p className="text-sm font-semibold tracking-[-0.03em] leading-[1.2] text-center w-full text-left md:text-base">
                        No, I don&apos;t want proactive heart monitoring
                    </p>
                </CardWrapper>
            </div>
        </VariantWrapper>
    );
};

export default PowerPlug;
