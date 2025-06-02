import BrowsingHeader from "./BrowsingHeader";
import ProductHistory from "./ProductHistory";


export default function BrowsingHistory() {
  return <div className="flex flex-col gap-6">
    <BrowsingHeader />
    <ProductHistory />
    <ProductHistory />
    <ProductHistory />
  </div>;
}
