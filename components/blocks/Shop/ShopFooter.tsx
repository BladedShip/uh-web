"use client";

import { useShopContext } from "@/context";
import { PRICE_ADDONS_LABELS, PRICE_ADDONS } from "@/constants";

type Props = {};

const BASE_PRICE = 28499;

const ShopFooter = (props: Props) => {
    const { product } = useShopContext();
    const { color, charger, tradeIn, engraving, powerPlug, coverage } = product;

    const addonsPrice = Object.keys(PRICE_ADDONS).reduce((acc, key) => {
        if (product[key as keyof typeof product]) {
            const productValue = product[key as keyof typeof product];
            if (productValue) {
                const priceAddonCategory = PRICE_ADDONS[key as keyof typeof PRICE_ADDONS];
                const additionalPrice = priceAddonCategory[productValue as keyof typeof priceAddonCategory];
                if (additionalPrice <= 0) return acc;
                return acc + additionalPrice;
            }
        }
        return acc;
    }, 0);

    const totalPriceWithBase = BASE_PRICE + addonsPrice;

    return (
        <footer className="bg-[#F5F5F5] p-2 sticky bottom-0 w-full flex flex-col">
            <div className="flex gap-2 justify-between py-2">
                <p className="text-sm text-gray-500 font-medium">Total</p>
                <p className="text-md font-bold">
                    {`₹${totalPriceWithBase.toLocaleString()}`}
                    <span className="text-sm text-gray-500 font-normal">{` (Tax incl.)`}</span>
                </p>
            </div>
            <button
                className="bg-[#007FF5] w-full px-[20px] py-[14px] rounded-[16px] text-white"
                style={{
                    boxShadow: "rgb(111, 186, 255) 0px 1px 4px 0px inset",
                }}
                onClick={() => {
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
                Add to cart
            </button>
        </footer>
    );
};

export default ShopFooter;
