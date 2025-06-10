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
    Header,
} from "@/components/blocks";

// The font used in this page is Graphik, currently usinf default Inter

const ShopPage = () => {
    return (
        <div className="min-h-screen md:h-screen md:flex md:flex-col">
            <div className="flex flex-col md:flex-row md:flex-1 md:min-h-0 justify-start items-start">
                <div className="w-full block md:hidden">
                    <Header />
                </div>
                <div className="md:h-full md:flex-[3]">
                    <ImageCarousel />
                </div>
                <div className="md:h-full md:flex-[2] md:overflow-y-auto">
                    <div className="w-full hidden md:block">
                        <Header />
                    </div>
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
