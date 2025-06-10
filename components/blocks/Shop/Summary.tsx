"use client";

import React from "react";
import { useShopContext } from "@/context";
import { PRICE_ADDONS, PRICE_ADDONS_LABELS } from "@/constants";
import { BatteryIcon, ChargerIcon, PlantIcon, ReturnIcon } from "@/components/icons";

const BASE_PRICE = 28499;

const Summary = () => {
    const { product, totalPriceValues } = useShopContext();
    const { color, size, charger, tradeIn, engraving, powerPlug, coverage } = product;

    // Calculate dispatch date (3 days for normal, 10 days if sizing kit selected)
    const dispatchDays = size === "kit" ? 10 : 3;
    const dispatchDate = new Date(Date.now() + dispatchDays * 24 * 60 * 60 * 1000);
    const formattedDispatchDate = dispatchDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
    });

    // Calculate EMI amount (assuming 24 months)
    const emiAmount = Math.round(totalPriceValues.totalPrice / 24);

    // Get selected addon items for display
    const selectedAddons = [];

    if (coverage && coverage !== "none") {
        selectedAddons.push({
            name: coverage === "1-year" ? "UltrahumanX - 1 year" : "UltrahumanX - 2 years",
            price: PRICE_ADDONS.coverage[coverage],
        });
    }

    if (powerPlug && powerPlug !== "none") {
        selectedAddons.push({
            name: powerPlug === "cardio-1" ? "Cardio Adaptability" : "Cardio Adaptability - 2 Years",
            price: PRICE_ADDONS.powerPlug[powerPlug],
        });
    }

    if (engraving) {
        selectedAddons.push({
            name: "Engraving",
            price: 3299,
        });
    }

    if (charger === "voyager") {
        selectedAddons.push({
            name: "Voyager Charger",
            price: PRICE_ADDONS.charger.voyager,
        });
    }

    return (
        <div className="bg-[#F5F5F5] rounded-2xl p-6 mx-4 mb-6" data-summary>
            {/* Header */}
            <h2 className="text-2xl font-medium tracking-[-0.04em] mb-6">Almost there. Here's your order summary.</h2>

            {/* Product Info */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">Ultrahuman Ring AIR</h3>
                <p className="text-base text-gray-600 md:text-lg">
                    {PRICE_ADDONS_LABELS.color[color]}, {size === "kit" ? "Sizing kit included" : `Size ${size}`}
                </p>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                    <span className="text-gray-500">Ring AIR</span>
                    <span className="text-gray-500">₹{BASE_PRICE.toLocaleString()}</span>
                </div>

                {selectedAddons.map((addon, index) => (
                    <div key={index} className="flex justify-between">
                        <span className="text-gray-500">{addon.name}</span>
                        <span className="text-gray-500">+₹{addon.price.toLocaleString()}</span>
                    </div>
                ))}

                {tradeIn && (
                    <div className="flex justify-between">
                        <span className="text-gray-500">Trade-in Credit</span>
                        <span className="text-gray-500">
                            -₹{Math.abs(PRICE_ADDONS.tradeIn[tradeIn]).toLocaleString()}
                        </span>
                    </div>
                )}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-4"></div>

            {/* Total */}
            <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-semibold">{tradeIn ? "Total due today" : "Total"}</span>
                <span className="text-xl font-semibold">
                    ₹{(tradeIn ? totalPriceValues.originalPrice : totalPriceValues.totalPrice).toLocaleString()}
                </span>
            </div>

            {/* Trade-in credit info */}
            {tradeIn && (
                <p className="text-sm font-semibold mb-4 md:text-base">
                    Eligible for ₹{totalPriceValues.credits.toLocaleString()} credit post trade in
                </p>
            )}

            {/* Dispatch Info */}
            <p className="text-sm text-gray-500 mb-6 md:text-base">
                Dispatched by : <span className="font-medium">{formattedDispatchDate}</span>
                {size === "kit" && <span> (after size selection)</span>}
            </p>

            {/* Add to Cart Button */}
            <button
                className="w-full bg-[#007FF5] text-white py-4 font-semibold rounded-2xl mb-4 disabled:bg-[#00000033] disabled:border-[#0000000D] disabled:border disabled:cursor-not-allowed disabled:text-[#000000B2] disabled:opacity-50"
                style={{
                    boxShadow: coverage ? "rgb(111, 186, 255) 0px 1px 4px 0px inset" : "none",
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
                disabled={!coverage}
            >
                Add to cart
            </button>

            {/* EMI Info */}
            <p className="text-sm font-semibold text-left mb-8 tracking-[-0.03em] leading-[1.2] md:text-base">
                No cost EMI starting at ₹{emiAmount.toLocaleString()}/month. Free Delivery
            </p>

            <div className="border-t border-gray-300 my-4"></div>

            <div className="flex justify-between gap-4 mb-6 pt-2 md:px-14">
                <div className="text-center">
                    <div className="w-12 mb-2 mx-auto flex items-center justify-center">
                        <ChargerIcon />
                    </div>
                    <p className="text-xs text-gray-600 md:text-sm">
                        Charging cable
                        <br />
                        included
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-12 mb-2 mx-auto flex items-center justify-center">
                        <BatteryIcon />
                    </div>
                    <p className="text-xs text-gray-600 md:text-sm">
                        4 to 6 days of
                        <br />
                        battery life
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-12 mb-2 mx-auto flex items-center justify-center">
                        <ReturnIcon />
                    </div>
                    <p className="text-xs text-gray-600 md:text-sm">30-day return</p>
                </div>
            </div>

            {/* Environmental Message */}
            <div className="flex items-center gap-3 bg-white rounded-lg p-4 ">
                <div className="flex-shrink-0 mt-1">
                    <PlantIcon />
                </div>
                <div>
                    <p className="text-xs md:text-sm">
                        <span className="font-extrabold">Building for a healthier planet.</span> For every order you
                        place this month, Ultrahuman plants a tree where it's needed most.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Summary;
