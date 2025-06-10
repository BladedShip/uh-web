"use client";

import { VariantWrapper } from "@/components/ui";
import CardWrapper from "@/components/ui/CardWrapper";
import { PRICE_ADDONS_LABELS } from "@/constants";
import { useShopContext } from "@/context";

type Props = {};

const ColorVariant = (props: Props) => {
    const { product, setColor } = useShopContext();
    const { color } = product;

    const colors = Object.keys(PRICE_ADDONS_LABELS.color);

    return (
        <VariantWrapper title="Color." subtitle="Choose a finish that suits your style.">
            <div className="grid grid-cols-2 gap-4">
                {colors.map((mapColor) => (
                    <CardWrapper
                        key={mapColor}
                        isSelected={mapColor === color}
                        onClick={() => setColor(mapColor as keyof typeof PRICE_ADDONS_LABELS.color)}
                    >
                        <div className="flex flex-col gap-2 items-center">
                            <img src={`/shop/rings/${mapColor}.avif`} alt={mapColor} className="w-18 h-18 object-cover" />
                            <p className="font-semibold text-base">
                                {PRICE_ADDONS_LABELS.color[mapColor as keyof typeof PRICE_ADDONS_LABELS.color]}
                            </p>
                        </div>
                    </CardWrapper>
                ))}
            </div>
        </VariantWrapper>
    );
};

export default ColorVariant;
