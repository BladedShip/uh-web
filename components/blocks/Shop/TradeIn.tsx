"use client";

import React, { useState } from "react";
import { CardWrapper, VariantWrapper } from "@/components/ui";
import { useShopContext } from "@/context";
import { cn } from "@/utils";
import { PRICE_ADDONS_LABELS } from "@/constants";
import { CheckMarkGreenIcon } from "@/components/icons";

type Props = {};

const TradeIn = (props: Props) => {
    const { product, setTradeIn, totalPriceValues } = useShopContext();
    const [tradeInSelected, setTradeInSelected] = useState<boolean>(false);
    const selectedTradeIn = product.tradeIn;
    return (
        <VariantWrapper title="Trade in." subtitle="Save up to ₹10,000 in credit.">
            <div className="grid grid-cols-2 gap-4">
                <CardWrapper
                    isSelected={tradeInSelected}
                    onClick={() => {
                        setTradeInSelected(true);
                    }}
                >
                    <p className="text-sm tracking-[-0.03em] leading-[1.2] font-semibold py-2 text-center md:text-base">
                        Select a smart ring
                    </p>
                </CardWrapper>
                <CardWrapper
                    isSelected={!tradeInSelected}
                    onClick={() => {
                        setTradeInSelected(false);
                        setTradeIn(undefined);
                    }}
                >
                    <p className="text-sm tracking-[-0.03em] leading-[1.2] font-semibold py-2 text-center md:text-base">
                        No trade in
                    </p>
                </CardWrapper>
            </div>
            {tradeInSelected && (
                <div className="flex flex-col gap-2 bg-[#EEEEEE80] p-4 rounded-lg">
                    <p className="text-sm tracking-[-0.03em] leading-[1.2] font-medium pb-3 md:text-base">
                        Select a smart ring you want to trade in
                    </p>
                    {Object.keys(PRICE_ADDONS_LABELS.tradeIn).map((tradeIn) => (
                        <CardWrapper
                            isSelected={selectedTradeIn === tradeIn}
                            onClick={() => setTradeIn(tradeIn as Product["tradeIn"])}
                            key={tradeIn}
                            className={cn("bg-white", selectedTradeIn === tradeIn && "border-black bg-[#EEEEEE]")}
                        >
                            <p className="md:text-base">{PRICE_ADDONS_LABELS.tradeIn[tradeIn as keyof typeof PRICE_ADDONS_LABELS.tradeIn]}</p>
                        </CardWrapper>
                    ))}
                    <p className="text-xs tracking-[-0.03em] leading-[1.2] font-medium text-center py-2 text-gray-500 md:text-sm">
                        Contact support for other smart ring eligibility
                    </p>
                    {!!tradeInSelected && !!selectedTradeIn && (
                        <div className="flex items-center gap-2">
                            <CheckMarkGreenIcon className="w-3 h-3 flex-shrink-0" />
                            <p className="text-sm tracking-[-0.03em] leading-[1.2] md:text-base">
                                {`Get ₹${totalPriceValues.credits.toLocaleString()} trade-in credit towards your Ring AIR. ₹${totalPriceValues.totalPrice.toLocaleString()} will be due now.`}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </VariantWrapper>
    );
};

export default TradeIn;
