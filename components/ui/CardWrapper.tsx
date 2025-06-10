import React from "react";
import { cn } from "@/utils";

type Props = {
    children: React.ReactNode;
    isSelected?: boolean;
    className?: string;
    onClick?: () => void;
};

const CardWrapper = ({ children, isSelected, className, onClick }: Props) => {
    return (
        <button
            className={cn(
                "flex flex-col gap-2 p-4 border rounded-lg border-[#00000026] justify-center items-center",
                isSelected && "border-black bg-[#EEEEEE]",
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CardWrapper;
