import React from "react";

type Props = {
    children: React.ReactNode;
};

const ShopLayout = ({ children }: Props) => {
    return <div>{children}</div>;
};

export default ShopLayout;
