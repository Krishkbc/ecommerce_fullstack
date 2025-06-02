import logo from "../../assests/Footer/image/Icon.png";
import ArrowRight from "../../assests/Footer/svg/ArrowRight.svg";
import AppStore from "../../assests/Footer/svg/AppStore.svg";
import GooglePlay from "../../assests/Footer/svg/PlayStore.svg";

const TopCategory = [
  "computer",
  "laptop",
  "headphone",
  "accessories",
  "camera",
  "TV & homes",
];

const QuickLinks = [
  "Shop Product",
  "Shopping Cart",
  "Whishlist",
  "Compare",
  "Track Order",
  "Customer Help",
  "About Us",
];

const Tags = [
  "Game",
  "Console",
  "Accessories",
  "Headphone",
  "Laptop",
  "Computer",
  "TV & Home",
  "Camera",
  "Smartphone",
  "Tablet",
  "Smartwatch",
  "Speaker",
];

export default function FooterComponent() {
  return (
    <div className="bg-[#191C1F] py-6">
      <div className="flex flex-row justify-center gap-32">
        {/* company info */}
        <div className="flex flex-col gap-4 w-72">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h1 className="font-public font-bold text-3xl leading-10 text-white">
              Clicon
            </h1>
          </div>

          <div>
            <p className="text-gray-text text-sm font-public font-normal">
              Customer Support:
            </p>
            <p className="font-public font-medium text-white text-lg">
              (629) 555-0129
            </p>
          </div>

          <div className="text-gray-text text-sm font-public font-normal text-wrap">
            4517 Washington Ave. Manchester, Kentucky 39495
          </div>

          <a
            className="text-white font-public font-semibold text-base"
            href="mailto:support@clicon.com"
          >
            support@clicon.com
          </a>
        </div>

        {/* Top category */}
        <div className="flex flex-row gap-14">
          <div className="flex flex-col gap-4 ">
            <h1 className="font-public text-base text-white">TOP CATEGORY</h1>

            <ul className="flex flex-col gap-2">
              {TopCategory.map((cat) => {
                return (
                  <li className="font-public font-medium text-gray-text text-sm">
                    {cat}
                  </li>
                );
              })}
            </ul>
            <a className="flex items-center gap-2 text-primary font-public font-medium text-base">
              Browser Product <img src={ArrowRight} alt="arrow right" />
            </a>
          </div>

          <div className="flex flex-col gap-4 ">
            <h1 className="font-public text-base text-white">QUICK LINKS</h1>

            <ul className="flex flex-col gap-2">
              {QuickLinks.map((link) => {
                return (
                  <li className="font-public font-medium text-gray-text text-sm">
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Download App */}
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-medium text-base pb-3">
              Download App
            </h2>

            <div className="flex flex-col gap-3 w-fit">
              <div className="flex flex-row gap-3 bg-[#303639] p-2 rounded-sm">
                <img src={AppStore} alt="app store" />
                <div className="flex flex-col gap-1 text-white">
                  <p className="font-public font-normal text-xs">Get it Now</p>
                  <p className="font-public font-semibold text-sm">
                    Google Play
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-3 bg-[#303639] p-2 rounded-sm">
                <img src={GooglePlay} alt="app store" />
                <div className="flex flex-col gap-1 text-white">
                  <p className="font-public font-normal text-xs">Get it Now</p>
                  <p className="font-public font-semibold text-sm">
                    Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-white font-public font-medium text-base pb-3">
              POPULAR TAG
            </h1>
            <ul className="flex flex-wrap w-80">
              {Tags.map((tag) => (
                <li className="inline-block border border-[#303639] px-2 py-1 text-white mr-2 mb-1">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
