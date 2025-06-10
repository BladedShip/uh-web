"use client";

import React from "react";
import { VariantWrapper, CardWrapper } from "@/components/ui";
import { useShopContext } from "@/context";
import { PRICE_ADDONS } from "@/constants";
import { CheckMarkIcon } from "@/components/icons";
import { cn } from "@/utils";

const UHXCoverage = () => {
    const { product, setCoverage } = useShopContext();
    const selectedCoverage = product.coverage;

    const oneYearFeatures = ["Extra value on trade-in", "Accidental damage protection", "Priority care"];

    const twoYearFeatures = [
        "Includes all 1 Year Coverage benefits",
        "Theft and loss protection",
        "Weight loss insurance",
    ];

    return (
        <VariantWrapper title="UltrahumanX Coverage." subtitle="Protect your new Ring." data-coverage>
            <div className="flex flex-col gap-4">
                <CardWrapper
                    isSelected={selectedCoverage === "1-year"}
                    onClick={() => setCoverage("1-year")}
                    className="items-start overflow-hidden"
                >
                    <div className="w-full">
                        <div className="flex justify-between items-center w-full mb-4">
                            <p className="text-sm font-semibold tracking-[-0.03em] leading-[1.2] md:text-base">
                                1 Year Coverage
                            </p>
                            <p className="text-sm font-semibold tracking-[-0.03em] leading-[1.2] md:text-base">
                                ₹{PRICE_ADDONS.coverage["1-year"].toLocaleString()}
                            </p>
                        </div>
                        <div className="w-full border-t border-gray-200 pt-4">
                            <div className="flex flex-col gap-3">
                                {oneYearFeatures.map((feature, index) => (
                                    <div key={index} className="flex gap-3 items-center">
                                        <CheckMarkIcon className="w-4 h-4 flex-shrink-0" />
                                        <p className="text-sm tracking-[-0.03em] leading-[1.2] md:text-base">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardWrapper>

                <CardWrapper
                    isSelected={selectedCoverage === "2-years"}
                    onClick={() => setCoverage("2-years")}
                    className="relative items-start overflow-hidden"
                >
                    <div
                        className={cn(
                            "absolute top-0 left-0 px-4 py-[6px] rounded-br-lg",
                            selectedCoverage === "2-years" ? "bg-white" : "bg-gray-200"
                        )}
                    >
                        <p className="text-[8px] font-semibold tracking-[0.2em] leading-[1.2] text-black">POPULAR</p>
                    </div>
                    <div className="w-full pt-3">
                        <div className="flex justify-between items-start w-full mb-2">
                            <div className="flex-1">
                                <p className="text-sm font-semibold tracking-[-0.03em] leading-[1.2] text-left md:text-base">
                                    2 Year Coverage
                                </p>
                                <div className="mt-1 flex items-center gap-2">
                                    <span className="bg-[#0EFF6E] px-1 py-[2px] text-[10px] font-semibold leading-[1.2] rounded-md">
                                        Save 17%
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold tracking-[-0.03em] leading-[1.2] md:text-base">
                                    ₹{PRICE_ADDONS.coverage["2-years"].toLocaleString()}
                                </p>
                                <p className="text-xs text-gray-500 tracking-[-0.03em] leading-[1.2] md:text-sm">
                                    (That&apos;s just ₹2,220/year)
                                </p>
                            </div>
                        </div>
                        <div className="w-full border-t border-gray-200 pt-4">
                            <div className="flex flex-col gap-3">
                                {twoYearFeatures.map((feature, index) => (
                                    <div key={index} className="flex gap-3 items-center">
                                        <CheckMarkIcon className="w-4 h-4 flex-shrink-0" />
                                        <p className="text-sm tracking-[-0.03em] leading-[1.2] md:text-base">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardWrapper>

                <CardWrapper isSelected={selectedCoverage === "none"} onClick={() => setCoverage("none")}>
                    <p className="text-sm font-semibold tracking-[-0.03em] leading-[1.2] text-center w-full md:text-base">
                        No, I don&apos;t want to protect my new Ring AIR
                    </p>
                </CardWrapper>
            </div>
        </VariantWrapper>
    );
};

export default UHXCoverage;
