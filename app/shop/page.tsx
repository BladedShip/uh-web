import {
    ColorVariant,
    Engraving,
    ImageCarousel,
    PowerPlug,
    ShopFooter,
    SizingKit,
    TradeIn,
    UHXCoverage,
    Charger,
    Summary,
} from "@/components/blocks";

// The font used in this page is Graphik, currently usinf default Inter

type Props = {};

const ShopPage = (props: Props) => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row md:h-screen justify-start items-start">
                <ImageCarousel />
                <div>
                    <ColorVariant />
                    <SizingKit />
                    <Charger />
                    <TradeIn />
                    <Engraving />
                    <PowerPlug />
                    <UHXCoverage />
                    <Summary />
                </div>
            </div>
            <ShopFooter />
        </div>
    );
};

export default ShopPage;
