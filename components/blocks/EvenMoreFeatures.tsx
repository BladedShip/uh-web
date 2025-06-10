import { SectionWrapper } from "@/components/ui";
import { EVEN_MORE_FEATURES } from "@/constants";

type Props = {};

const EvenMoreFeatures = (props: Props) => {
    return (
        <SectionWrapper id="features" className="p-0 py-0 px-0 mb-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mb-4 md:mb-28 py-4">
                <div className="flex gap-1 items-center mb-4 mt-12 md:mt-0">
                    {/* The colors change from layout, but this might be a design issue or maybe a decision, idk */}
                    <div className="w-3 h-3 bg-[#193CBF] md:bg-black rounded-[2px]" />
                    <span className="text-sm font-medium uppercase leading-none tracking-normal text-[#797979]">
                        A sublime design wonder
                    </span>
                </div>

                <h2 className="text-[36px] lg:text-[45px] font-medium tracking-[-0.03em] lg:tracking-tight leading-[40px] lg:leading-[65px] md:mt-0">
                    Accuracy at its core
                </h2>
            </div>
            <BatteryLife />

            <div className="py-8 overflow-x-scroll px-8 flex gap-1 scrollbar-none">
                {EVEN_MORE_FEATURES.map((feature, index) => (
                    <FeatureCard key={index + feature.title} {...feature} />
                ))}
            </div>

            <Weight />
        </SectionWrapper>
    );
};

const FeatureCard = ({ title, description, image }: EvenMoreFeature) => {
    return (
        <div className="w-[220px] bg-[#F5F5F5] rounded-[24px] p-6 flex flex-col gap-[38px] flex-shrink-0">
            <img src={image} alt={title} className="w-10 h-10 object-contain" />

            <div className="flex flex-col gap-4 w-[150px]">
                <h3 className="text-[16px] font-medium leading-[19px] tracking-[-0.02em] text-[#000000] line-clamp-3">
                    {title}
                </h3>
                <p className="text-[14px] text-[#797979] line-clamp-4">{description}</p>
            </div>
        </div>
    );
};

const BatteryLife = () => {
    return (
        <div className="flex flex-col gap-3 rounded-[20px] rounded-l-[0px] w-[clamp(0rem,75vw,30rem)] px-5 py-6 bg-[#193CBF] text-white">
            <div className="flex flex-col gap-2">
                <div className="font-semibold text-[32px] leading-[100px] tracking-[-1px]">4-6</div>
                <div className="font-normal text-[18px] leading-[26px] tracking-[0px]">Days Battery life</div>
            </div>
        </div>
    );
};

const Weight = () => {
    return (
        <div className="flex justify-end">
            <div className="flex flex-col gap-3 rounded-[20px] rounded-r-[0px] w-[clamp(0rem,75vw,30rem)] px-5 py-6 bg-[#E1EA72] text-white">
                <div className="flex flex-col gap-2">
                    <div className="font-semibold text-[32px] leading-[100px] tracking-[-1px] text-[#334916]">2.4</div>
                    <div className="font-normal text-[18px] leading-[26px] tracking-[0px] text-[#334916]">
                        Grams Light
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvenMoreFeatures;
