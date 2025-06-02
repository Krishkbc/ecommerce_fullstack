import AdditionalProduct from "./AdditionalProduct";
import ProductImage from "./ProductImage";
import TabInformation from "./TabInformation";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  const { state: product } = useLocation();

  console.log(product);

  return (
    <div className="container mx-auto px-6 flex flex-col gap-6 mt-3 mb-12 space-y-8">
      <ProductImage product={product} />
      <TabInformation />
      <AdditionalProduct />
    </div>
  );
}
