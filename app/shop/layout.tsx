import { ShopProvider } from "@/context";

type Props = {
    children: React.ReactNode;
};

const ShopLayout = ({ children }: Props) => {
    return <ShopProvider>{children}</ShopProvider>;
};

export default ShopLayout;
