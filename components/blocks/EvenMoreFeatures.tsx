import { SectionWrapper } from "@/components/ui";

type Props = {};

const EvenMoreFeatures = (props: Props) => {
    return (
        <SectionWrapper id="features">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold">Even More Features</h2>
            </div>
        </SectionWrapper>
    );
};

export default EvenMoreFeatures;
