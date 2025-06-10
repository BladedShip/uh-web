"use client";

import { createContext, useContext, useReducer, useMemo } from "react";
const BASE_PRICE = 28499;
import { PRICE_ADDONS_LABELS, PRICE_ADDONS } from "@/constants";

// Action types
type ShopAction =
    | { type: "SET_COLOR"; payload: Product["color"] }
    | { type: "SET_SIZE"; payload: Product["size"] }
    | { type: "SET_CHARGER"; payload: Product["charger"] }
    | { type: "SET_TRADE_IN"; payload: Product["tradeIn"] }
    | { type: "SET_ENGRAVING"; payload: string | undefined }
    | { type: "SET_POWER_PLUG"; payload: Product["powerPlug"] }
    | { type: "SET_COVERAGE"; payload: Product["coverage"] }
    | { type: "RESET_PRODUCT" };

// Initial state
const initialProduct: Product = {
    color: "rt",
    size: "kit",
    charger: "free",
    powerPlug: "none",
    coverage: "none",
};

// Reducer function
const shopReducer = (state: Product, action: ShopAction): Product => {
    switch (action.type) {
        case "SET_COLOR":
            return { ...state, color: action.payload };
        case "SET_SIZE":
            return { ...state, size: action.payload };
        case "SET_CHARGER":
            return { ...state, charger: action.payload };
        case "SET_TRADE_IN":
            return { ...state, tradeIn: action.payload };
        case "SET_ENGRAVING":
            return { ...state, engraving: action.payload };
        case "SET_POWER_PLUG":
            return { ...state, powerPlug: action.payload };
        case "SET_COVERAGE":
            return { ...state, coverage: action.payload };
        case "RESET_PRODUCT":
            return initialProduct;
        default:
            return state;
    }
};

type ShopContextType = {
    product: Product;
    dispatch: React.Dispatch<ShopAction>;
    // Helper functions for common actions
    setColor: (color: Product["color"]) => void;
    setSize: (size: Product["size"]) => void;
    setCharger: (charger: Product["charger"]) => void;
    setTradeIn: (tradeIn: Product["tradeIn"]) => void;
    setEngraving: (engraving: string | undefined) => void;
    setPowerPlug: (powerPlug: Product["powerPlug"]) => void;
    setCoverage: (coverage: Product["coverage"]) => void;
    resetProduct: () => void;
    totalPriceValues: {
        basePrice: number;
        addonsPrice: number;
        totalPrice: number;
        credits: number;
    };
};

const ShopContext = createContext<ShopContextType | null>(null);

const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [product, dispatch] = useReducer(shopReducer, initialProduct);
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
    const totalPriceValues = {
        basePrice: BASE_PRICE,
        addonsPrice: addonsPrice,
        totalPrice: BASE_PRICE + addonsPrice,
        credits: product.tradeIn ? Math.abs(PRICE_ADDONS.tradeIn[product.tradeIn]) : 0,
    };

    // Memoized helper functions
    const contextValue = useMemo(
        () => ({
            product,
            dispatch,
            setColor: (color: Product["color"]) => dispatch({ type: "SET_COLOR", payload: color }),
            setSize: (size: Product["size"]) => dispatch({ type: "SET_SIZE", payload: size }),
            setCharger: (charger: Product["charger"]) => dispatch({ type: "SET_CHARGER", payload: charger }),
            setTradeIn: (tradeIn: Product["tradeIn"]) => dispatch({ type: "SET_TRADE_IN", payload: tradeIn }),
            setEngraving: (engraving: string | undefined) => dispatch({ type: "SET_ENGRAVING", payload: engraving }),
            setPowerPlug: (powerPlug: Product["powerPlug"]) => dispatch({ type: "SET_POWER_PLUG", payload: powerPlug }),
            setCoverage: (coverage: Product["coverage"]) => dispatch({ type: "SET_COVERAGE", payload: coverage }),
            resetProduct: () => dispatch({ type: "RESET_PRODUCT" }),
            totalPriceValues,
        }),
        [product, totalPriceValues]
    );

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

const useShopContext = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error("useShopContext must be used within a ShopProvider");
    }
    return context;
};

export { ShopProvider, useShopContext };
export type { ShopAction };
