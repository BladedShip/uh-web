import { SectionWrapper } from "@/components/ui";

type Props = {};

const MoreFeatures = (props: Props) => {
    return (
        <SectionWrapper id="features">
            <div className=" max-w-7xl mx-auto px-4 lg:px-8">
                <h2 className="text-[36px] lg:text-[45px] font-medium tracking-[-0.03em] lg:tracking-tight leading-[40px] lg:leading-[65px] text-left">
                    Beautiful from the inside
                </h2>
            </div>
        </SectionWrapper>
    );
};

export default MoreFeatures;
