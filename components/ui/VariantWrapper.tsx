import { cn } from "@/utils";

type Props = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    className?: string;
    dividerClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const VariantWrapper = ({ title, subtitle, children, className, dividerClassName, ...props }: Props) => {
    return (
        <div className={cn(`flex flex-col gap-4 pt-4 px-4 w-full`, className)} {...props}>
            <h2 className="text-[20px] font-medium tracking-[-0.04em]">
                {title} <span className="text-[#8D8D8D]">{subtitle}</span>
            </h2>
            {children}
            <div className={cn("border-t border-[#00000012] my-4", dividerClassName)} />
        </div>
    );
};

export default VariantWrapper;
