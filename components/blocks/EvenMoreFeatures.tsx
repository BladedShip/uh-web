import { SectionWrapper } from "@/components/ui";
import { EVEN_MORE_FEATURES } from "@/constants";
import { cn } from "@/utils";

type Props = {};

const EvenMoreFeatures = (props: Props) => {
    return (
        <SectionWrapper id="features" className="p-0 py-0 px-0 mb-28">
            <div className="md:max-w-7xl md:mx-auto md:grid md:grid-cols-3 md:gap-14 md:mb-28 mb-4 md:px-8">
                <div className="flex flex-col justify-between">
                    <div className="max-w-7xl mx-auto px-6 w-full py-4 md:px-0">
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
                    <div className="hidden md:flex flex-col gap-4">
                        <StatCard
                            value="4-6"
                            description="Days Battery life"
                            bgColor="bg-[#193CBF]"
                            textColor="text-white"
                            roundedClass="rounded-[20px] md:rounded-[30px]"
                            width="w-full"
                            padding="px-10 py-8"
                            textContainerClassName="gap-0"
                        />
                        <StatCard
                            value="2.4"
                            description="Grams Light"
                            bgColor="bg-[#E1EA72]"
                            textColor="text-[#334916]"
                            roundedClass="rounded-[20px] md:rounded-[30px]"
                            width="w-full"
                            padding="px-10 py-8"
                            textContainerClassName="gap-0"
                        />
                    </div>
                </div>
                <div className="block md:hidden">
                    <StatCard
                        value="4-6"
                        description="Days Battery life"
                        bgColor="bg-[#193CBF]"
                        textColor="text-white"
                        roundedClass="rounded-[20px] rounded-l-[0px]"
                        width="w-[clamp(0rem,75vw,30rem)]"
                        padding="px-5 py-6"
                    />
                </div>

                <div className="py-8 overflow-x-scroll px-8 flex gap-1 scrollbar-none md:grid md:grid-cols-2 md:grid-rows-7 md:gap-4 col-span-2 md:p-0">
                    <div className="col-span-1 row-span-1" />
                    {EVEN_MORE_FEATURES.map((feature, index) => (
                        <FeatureCard key={index + feature.title} {...feature} />
                    ))}
                </div>

                <div className="flex md:hidden justify-end">
                    <StatCard
                        value="2.4"
                        description="Grams Light"
                        bgColor="bg-[#E1EA72]"
                        textColor="text-[#334916]"
                        roundedClass="rounded-[20px] rounded-r-[0px]"
                        width="w-[clamp(0rem,65vw,30rem)]"
                        padding="px-8 py-6"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
};

const FeatureCard = ({ title, description, image }: EvenMoreFeature) => {
    return (
        <div className="w-[220px] bg-[#F5F5F5] rounded-[24px] p-6 flex flex-col gap-[38px] flex-shrink-0 col-span-1 row-span-3 md:w-full md:flex-shrink-1">
            <img src={image} alt={title} className="w-10 h-10 md:w-14 md:h-14 object-contain" />

            <div className="flex flex-col gap-4 w-[150px] md:w-full">
                <h3 className="text-[16px] font-medium leading-[19px] md:text-[24px] md:leading-[29px] tracking-[-0.02em] text-[#000000] line-clamp-3">
                    {title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#797979] line-clamp-4">{description}</p>
            </div>
        </div>
    );
};

const StatCard = ({
    value,
    description,
    bgColor,
    textColor,
    roundedClass,
    width,
    padding,
    className,
    textContainerClassName,
}: StatCardProps) => {
    return (
        <div className={cn("flex flex-col gap-3", roundedClass, width, padding, bgColor, textColor, className)}>
            <div className={cn("flex flex-col gap-1", textContainerClassName)}>
                <p className="font-semibold text-[32px] md:text-[74px] leading-[100px] md:leading-[70px] tracking-[-1px]">
                    {value}
                </p>
                <p className="font-normal text-[18px] md:text-[22px] leading-[26px] tracking-[0px]">{description}</p>
            </div>
        </div>
    );
};

export default EvenMoreFeatures;
