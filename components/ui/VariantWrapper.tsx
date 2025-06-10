import React from "react";

type Props = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
};

const VariantWrapper = ({ title, subtitle, children }: Props) => {
    return (
        <div className="flex flex-col gap-4 py-8 px-4 w-full">
            <h2 className="text-[20px] font-medium tracking-[-0.04em]">
                {title} <span className="text-[#8D8D8D]">{subtitle}</span>
            </h2>
            {children}
        </div>
    );
};

export default VariantWrapper;
