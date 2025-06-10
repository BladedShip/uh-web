import React from "react";
import { cn } from "@/utils";

type Props = {
    id: string;
    children: React.ReactNode;
    className?: string;
    dynamicHeight?: boolean;
};

const SectionWrapper = ({ id, children, className, dynamicHeight }: Props) => {
    return (
        <section
            id={id}
            className={cn(
                `w-full relative p-2 py-4 flex flex-col`,
                !dynamicHeight && "min-h-[80vh] md:min-h-screen",
                className
            )}
        >
            {children}
        </section>
    );
};

export default SectionWrapper;
