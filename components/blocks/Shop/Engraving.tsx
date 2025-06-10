"use client";

import { useState } from "react";
import { VariantWrapper, CardWrapper } from "@/components/ui";
import { useShopContext } from "@/context";

const ENGRAVING_PRICE = 3299;
const MAX_LENGTH = 8;

const Engraving = () => {
    const { product, setEngraving } = useShopContext();
    const [engravingSelected, setEngravingSelected] = useState<boolean>(false);
    const engraving = product.engraving || "";

    return (
        <VariantWrapper title="Engraving." subtitle="Personalize it to make it uniquely yours.">
            <div className="flex flex-col gap-4">
                <div>
                    <CardWrapper
                        isSelected={engravingSelected}
                        className="items-start w-full p-0 px-0 py-0 overflow-hidden"
                        onClick={() => {
                            if (!engravingSelected) {
                                setEngravingSelected(true);
                                setEngraving("");
                            }
                        }}
                    >
                        <div className="w-full">
                            <div className="w-full p-4">
                                <p className="text-sm tracking-[-0.03em] leading-[1.2] font-semibold w-full text-left md:text-base">
                                    Add engraving
                                </p>
                                <p className="text-gray-500 text-sm leading-tight text-left w-full md:text-base">
                                    Add custom engraving for just ₹{ENGRAVING_PRICE.toLocaleString()} extra
                                    <br />
                                    <span className="text-xs md:text-sm">*Engraving orders take 7 days longer to ship</span>
                                </p>
                            </div>
                            {engravingSelected && (
                                <div className="bg-white p-4 border-t">
                                    <input
                                        type="text"
                                        maxLength={MAX_LENGTH}
                                        placeholder="eg. Jon Snow"
                                        value={engraving}
                                        onChange={(e) => setEngraving(e.target.value)}
                                        className="w-full font-medium placeholder:text-gray-400 outline-none bg-white"
                                        disabled={!engravingSelected}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                            )}
                        </div>
                    </CardWrapper>
                    {engravingSelected && (
                        <div className="flex justify-between w-full text-xs text-gray-400 mt-2">
                            <span>Max. {MAX_LENGTH} characters</span>
                            <span className="text-right">(alphanumeric & some special characters supported)</span>
                        </div>
                    )}
                </div>
                <CardWrapper
                    isSelected={!engravingSelected}
                    className="w-full"
                    onClick={() => {
                        setEngravingSelected(false);
                        setEngraving(undefined);
                    }}
                >
                    <span className="text-sm tracking-[-0.03em] leading-[1.2] font-semibold md:text-base w-full text-left">
                        I don&apos;t want the engraving
                    </span>
                </CardWrapper>
            </div>
        </VariantWrapper>
    );
};

export default Engraving;
