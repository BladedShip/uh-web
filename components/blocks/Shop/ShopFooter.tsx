"use client";

import { useShopContext } from "@/context";
import { PRICE_ADDONS_LABELS } from "@/constants";
import { DispatchIcon } from "@/components/icons";
import { cn } from "@/utils";

const ShopFooter = () => {
    const { product, totalPriceValues } = useShopContext();
    const { color, charger, tradeIn, engraving, powerPlug, coverage, size } = product;

    const scrollToSummary = () => {
        const summaryElement = document.querySelector("[data-summary]");
        if (summaryElement) {
            summaryElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-[#F5F5F5] p-2 sticky bottom-0 w-full flex flex-col md:grid md:grid-cols-9 md:gap-10 md:px-8">
            <div className="flex gap-2 justify-between py-2 col-span-6">
                <button
                    onClick={scrollToSummary}
                    className="text-sm text-gray-500 font-medium items-center gap-1 hover:text-gray-700 flex md:hidden"
                >
                    Show Breakup
                    <span className="text-lg">›</span>
                </button>
                <div className="flex gap-2 items-center">
                    <DispatchIcon className="w-4 h-4 flex-shrink-0" />
                    <p className="text-sm text-left tracking-[-0.03em] leading-[1.2]">
                        Dispatched by :{" "}
                        <span className="font-semibold">
                            {new Date(Date.now() + (size === "kit" ? 6 : 3) * 24 * 60 * 60 * 1000).toLocaleDateString(
                                "en-US",
                                {
                                    day: "2-digit",
                                    month: "short",
                                }
                            )}{" "}
                        </span>
                        {size === "kit" ? `(after size selection)` : ``}
                    </p>
                </div>
                <div className={cn("text-right items-center md:gap-2", !tradeIn && "md:flex")}>
                    <p className="text-md font-bold md:text-lg">
                        ₹{(tradeIn ? totalPriceValues.originalPrice : totalPriceValues.totalPrice).toLocaleString()}{" "}
                        {tradeIn ? "due today" : ""}
                    </p>
                    {tradeIn ? (
                        <p className="text-xs text-gray-500 font-normal md:text-sm">
                            ₹{totalPriceValues.totalPrice.toLocaleString()} (after trade in, Tax incl)
                        </p>
                    ) : (
                        <span className="text-xs text-gray-500 font-normal md:text-sm">(Tax incl.)</span>
                    )}
                </div>
            </div>
            <button
                className="bg-[#007FF5] w-full px-[20px] py-[14px] rounded-[16px] text-white col-span-3"
                style={{
                    boxShadow: "rgb(111, 186, 255) 0px 1px 4px 0px inset",
                }}
                onClick={() => {
                    if (!coverage) {
                        const coverageElement = document.querySelector("[data-coverage]");
                        if (coverageElement) {
                            coverageElement.scrollIntoView({ behavior: "smooth" });
                        }
                        return;
                    }
                    console.log(
                        "Product Prefernces",
                        JSON.stringify({
                            Color: PRICE_ADDONS_LABELS.color[color],
                            Size: product.size,
                            Charger: PRICE_ADDONS_LABELS.charger[charger],
                            "Trade In": tradeIn ? PRICE_ADDONS_LABELS.tradeIn[tradeIn] : "None",
                            Engraving: engraving || "None",
                            "Power Plug": powerPlug ? PRICE_ADDONS_LABELS.powerPlug[powerPlug] : "None",
                            Coverage: coverage ? PRICE_ADDONS_LABELS.coverage[coverage] : "None",
                        })
                    );
                }}
            >
                {coverage ? "Add to cart" : "Continue"}
            </button>
        </footer>
    );
};

export default ShopFooter;
