import camera from "../../assests/productDetail/camera.png";

export default function ProductCard() {
  return (
    <div className="flex gap-4 border border-gray-200 p-3 w-[312px] h-[104px]">
      <img src={camera} />
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-public font-normal text-black">
          Simple Mobile 4G LTE Prepaid Smartphone
        </h2>
        <p className="text-[#2DA5F3] font-public font-semibold text-sm">
          $1,500
        </p>
      </div>
    </div>
  );
}
