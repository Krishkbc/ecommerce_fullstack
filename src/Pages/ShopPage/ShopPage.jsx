import React from "react";
import SideBarFilter from "./SideFilterBar";
import ProductDisplay from "./ProductDisplay";

export default function ShopPage() {
 
  return (
    <div className="flex container mx-auto px-4">
        <SideBarFilter />
        <ProductDisplay />
    </div>
  );
}
