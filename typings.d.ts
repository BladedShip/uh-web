type Feature = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    features: string[];
};

type MoreFeature = {
    title: string;
    description: string;
    image: string;
    link: string;
};

type EvenMoreFeature = {
    title: string;
    description: string;
    image: string;
};

type StatCardProps = {
    value: string;
    description: string;
    bgColor: string;
    textColor: string;
    roundedClass: string;
    width: string;
    padding: string;
    className?: string;
    textContainerClassName?: string;
};

type Product = {
    color: "rt" | "ab" | "mg" | "bg" | "ss";
    size: "kit" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14";
    charger: "voyager" | "free";
    tradeIn: boolean;
    engraving?: string;
    powerPlug?: "cardio-1" | "cardio-2" | "none";
    coverage?: "2-years" | "1-year" | "none";
};
