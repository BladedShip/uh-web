import { ColorVariant, ImageCarousel, ShopFooter } from "@/components/blocks";

// The font used in this page is Graphik, currently usinf default Inter

type Props = {};

const ShopPage = (props: Props) => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row md:h-screen justify-start items-start">
                <ImageCarousel />
                <ColorVariant />
            </div>
            <ShopFooter />
        </div>
    );
};

export default ShopPage;
