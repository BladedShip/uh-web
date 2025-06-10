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