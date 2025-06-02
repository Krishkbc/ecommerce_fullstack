import Cross from "../../assests/Header/Cross.svg";
import Black from "../../assests/Header/Black.png";
import ArrowRightBlack from "../../assests/Header/ArrowRightBlack.svg";

export default function OfferHeader() {
  return (
    <div className="bg-black relative py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Black} alt="Black" />
            <p className="text-white font-public font-medium leading-5 text-sm">
              Friday
            </p>
          </div>
          <div className="flex items-center text-white gap-2">
            <p className="font-public font-medium leading-5 text-sm ">Up to</p>
            <h1 className="font-public font-bold leading-10 text-4xl text-primary">
              59%
            </h1>
            <p className="font-public font-semibold leading-7 text-xl">Off</p>
          </div>
          <button className="bg-primary font-public font-semibold leading-7 text-xl px-5 py-2 rounded-md text-black flex items-center gap-2">
            Shop Now
            <img src={ArrowRightBlack} alt="ArrowRight" />
          </button>
        </div>
      </div>
      <button className="bg-gray-800 p-1 absolute right-4 top-4">
        <img src={Cross} alt="Cross" />
      </button>
    </div>
  );
}
