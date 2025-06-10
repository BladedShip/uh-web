"use client";

import { CardWrapper, VariantWrapper } from "@/components/ui";
import { useShopContext } from "@/context";
import React from "react";

type Props = {};

const Charger = (props: Props) => {
    const { product, setCharger } = useShopContext();
    const isChargerSelected = product.charger;
    return (
        <VariantWrapper title="Charger." subtitle="Power up and never miss a beat.">
            <CardWrapper
                className="relative"
                isSelected={isChargerSelected === "voyager"}
                onClick={() => setCharger("voyager")}
            >
                <p className="absolute top-1 right-1 bg-[#0EFF6E] px-[5px] py-[2px] text-xs font-semibold tracking-[0.1em] leading-[1.2] rounded-sm">
                    NEW
                </p>
                <img src="/shop/charger.avif" className="w-[200px] h-[150px] object-cover" />
                <p className="font-semibold text-left text-sm pt-2 w-full">Get the Voyager Ring Charger at ₹3,799</p>
                <p className="text-sm text-left tracking-[-0.03em] leading-[1.2] text-gray-500">
                    A compact, powerful, and lightweight charger, engineered for the adventurer in you.
                </p>
            </CardWrapper>
            <CardWrapper isSelected={isChargerSelected === "free"} onClick={() => setCharger("free")}>
                <p className="text-sm text-left tracking-[-0.03em] leading-[1.2] font-semibold w-full">
                    Free Standard Charger
                </p>
            </CardWrapper>
        </VariantWrapper>
    );
};

export default Charger;
