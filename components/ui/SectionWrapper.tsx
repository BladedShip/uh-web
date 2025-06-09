import React from "react";
import { cn } from "@/utils";

type Props = {
    id: string;
    children: React.ReactNode;
    className?: string;
};

const SectionWrapper = ({ id, children, className }: Props) => {
    return (
        <section id={id} className={cn(`min-h-[80vh] md:min-h-screen w-full relative p-2 py-4 flex flex-col`, className)}>
            {children}
        </section>
    );
};

export default SectionWrapper;
