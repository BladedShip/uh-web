import { SectionWrapper } from "@/components/ui";
import { MORE_FEATURES } from "@/constants";
import Link from "next/link";

type Props = {};

const MoreFeatureCard = ({ title, description, image, link }: MoreFeature) => (
    // Able to get away with static mb on md for now because there are only 2 cards
    <div className="relative mb-[45vw] md:mb-24">
        <div className="bg-[#F2F2F2] rounded-[12px] p-4 md:p-9 md:py-9 py-5 flex flex-col h-full pb-[clamp(5rem,25vw,8rem)] md:pb-[clamp(3rem,18vw,14.4rem)]">
            <div className="flex flex-col gap-6 flex-1">
                <h3 className="font-medium text-[26px] md:text-[20px] leading-[30px] tracking-[-0.03em] text-[#22143E]">
                    {title}
                </h3>
                <p className="font-medium text-[16px] leading-[21px] tracking-[-0.01em] text-[#202020] opacity-50 flex-1 md:line-clamp-2">
                    {description}
                </p>
            </div>

            <Link
                href={link}
                className="inline-flex items-center gap-2 font-medium text-[14px] md:text-[12px] leading-[100%] uppercase text-black hover:opacity-70 transition-opacity justify-between mt-6 md:mt-10"
            >
                LEARN MORE
                <img src="/arrow.svg" alt="Arrow" className="w-3 h-3 md:w-2 md:h-2" />
            </Link>
            <div className="absolute bottom-0 left-4 right-4 z-10 translate-y-[66%] md:translate-y-[33%] md:left-9 md:right-9">
                <img src={image} alt={title} className="w-full rounded-[8px] object-cover aspect-[1.7]" />
            </div>
        </div>
    </div>
);

const MoreFeatures = (props: Props) => {
    return (
        <SectionWrapper id="features" dynamicHeight>
            <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full mb-16 md:mb-28">
                <h2 className="text-[36px] lg:text-[45px] font-medium tracking-[-0.03em] lg:tracking-tight leading-[40px] lg:leading-[65px] mt-12 md:mt-0 mb-12">
                    Precision in miniature
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {MORE_FEATURES.map((feature, index) => (
                        <MoreFeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default MoreFeatures;
