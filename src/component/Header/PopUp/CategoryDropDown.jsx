import ArrowRight from "../../../assests/Header/ArrowRight.svg";

const phoneCategories = [
  "All",
  "iphone",
  "ipad",
  "Samsung",
  "Huawei",
  "Xiaomi",
  "Oppo",
  "Vivo",
  "Realme",
  "OnePlus",
];

import Phone1 from "../../../assests/Header/Phone1.png";
import BannerPhone from "../../../assests/Header/BannerPhoneImage.png";

const ProductPhone = [
  {
    img: Phone1,
    title: "Samsung Electronics Samasung Galaxy S21 5G",
    price: "1200$",
  },
  {
    img: Phone1,
    title: "Samsung Electronics Samasung Galaxy S21 5G",
    price: "1200$",
  },
  {
    img: Phone1,
    title: "Samsung Electronics Samasung Galaxy S21 5G",
    price: "1200$",
  },
];

export default function CategoryDropDown() {
  return (
    <div className="bg-white drop-shadow-md w-fit ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-4">
          <div>
            <ul className="flex flex-col gap-4 text-gray-text text-sm font-normal w-40">
              {phoneCategories.map((phone) => (
                <li className="cursor-pointer hover:text-black">{phone}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 w-80">
            <h2 className="text-base font-semibold font-public">
              Featured Phones
            </h2>
            {ProductPhone.map((phone) => {
              return (
                <div className="flex items-center gap-4 px-4 py-2 border border-gray-200">
                  <img src={phone.img} alt="" />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-normal">{phone.title}</p>
                    <p className="text-sm font-normal text-blue-500">
                      {phone.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-amber-200 flex flex-col items-center p-5 rounded-md w-80 gap-5">
            <img src={BannerPhone} alt="" />

            <div className="flex flex-col gap-5 text-center justify-between items-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">21% Discount</h1>
                <p className="text-base font-normal text-gray-text">
                  Escape the ordinary with the latest smartphones
                </p>
              </div>
              <div className="flex gap-2 items-center ">
                <p className="text-sm font-normal text-gray-text">
                  Starting Price
                </p>
                <p className="text-base font-semibold text-black bg-white px-2 py-1 rounded-md">
                  $1200 USD
                </p>
              </div>
              <button className=" font-public font-bold bg-orange-500 py-2 flex gap-4 items-center w-full rounded justify-center text-white leading-10">Shop Now <img src={ArrowRight}/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
