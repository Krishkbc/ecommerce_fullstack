import ProductCard from "./ProductCard";

export default function AdditionalProduct() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-5">
        <h2 className="font-public font-semibold text-base text-black">
          RELATED PRODUCTS
        </h2>
        <div className="flex flex-col gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="font-public font-semibold text-base text-black">
          RELATED PRODUCTS
        </h2>
        <div className="flex flex-col gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="font-public font-semibold text-base text-black">
          RELATED PRODUCTS
        </h2>
        <div className="flex flex-col gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="font-public font-semibold text-base text-black">
          RELATED PRODUCTS
        </h2>
        <div className="flex flex-col gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
