import { useState } from "react";
import medal from "../../assests/productDetail/medal.svg";
import headphone from "../../assests/productDetail/headphone.svg";
import handshake from "../../assests/productDetail/handshake.svg";
import truck from "../../assests/productDetail/truck.svg";
import card from "../../assests/productDetail/card.svg";

const tabs = [
  {
    title: "DESCRIPTION",
    content: "This is the overview section with general info.",
  },
  {
    title: "ADDTIONAL INFORMATION",
    content: "Here are the details about the topic or product.",
  },
  {
    title: "SPECIFICATION",
    content: "Read what others have said in this reviews section.",
  },
  { title: "REVIEWS", content: "Frequently Asked Questions and answers." },
];

export default function TabInformation() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mx-auto p-4 border border-gray-200 ">
      {/* Tabs */}
      <div className="flex border-b justify-center border-gray-200 gap-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === index
                ? "border-b-2 border-[#FA8232] text-black text-sm font-medium "
                : "text-gray-text text-sm text-medium "
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4 text-gray-700 transition-all duration-300 p-5">
        <div className="flex gap-10 justify-between">
          <div className="flex flex-col gap-3 max-w-[610px]">
            <h2 className="font-public font-semibold text-black text-base">
              Description
            </h2>
            <p className="font-public font-normal text-sm text-gray-text">
              The most powerful MacBook Pro ever is here. With the blazing-fast
              M1 Pro or M1 Max chip — the first Apple silicon designed for pros
              — you get groundbreaking performance and amazing battery life. Add
              to that a stunning Liquid Retina XDR display, the best camera and
              audio ever in a Mac notebook, and all the ports you need. The
              first notebook of its kind, this MacBook Pro is a beast. M1 Pro
              takes the exceptional performance of the M1 architecture to a
              whole new level for pro users.
            </p>
            <p className="font-public font-normal text-sm text-gray-text">
              Even the most ambitious projects are easily handled with up to 10
              CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and
              dedicated encode and decode media engines that support H.264,
              HEVC, and ProRes codecs.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-public font-semibold text-black text-base">
              Feature
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <img src={medal} />
                <p className="font-public font-normal text-sm">
                  Free 1 Year Warranty
                </p>
              </div>

              <div className="flex gap-2">
                <img src={truck} />
                <p className="font-public font-normal text-sm">
                  Free 1 Year Warranty
                </p>
              </div>

              <div className="flex gap-2">
                <img src={handshake} />
                <p className="font-public font-normal text-sm">
                  Free 1 Year Warranty
                </p>
              </div>

              <div className="flex gap-2">
                <img src={headphone} />
                <p className="font-public font-normal text-sm">
                  Free 1 Year Warranty
                </p>
              </div>

              <div className="flex gap-2">
                <img src={card} />
                <p className="font-public font-normal text-sm">
                  Free 1 Year Warranty
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-public font-semibold text-black text-base">
              Shipping information
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <p className="text-sm font-medium font-public text-black">
                  Courier:
                </p>
                <p className="text-gray-text font-public font-normal text-sm">
                  2-3 days, of free shipping
                </p>
              </div>
              <div className="flex gap-2">
                <p className="text-sm font-medium font-public text-black">
                  Courier:
                </p>
                <p className="text-gray-text font-public font-normal text-sm">
                  2-3 days, of free shipping
                </p>
              </div>
              <div className="flex gap-2">
                <p className="text-sm font-medium font-public text-black">
                  Courier:
                </p>
                <p className="text-gray-text font-public font-normal text-sm">
                  2-3 days, of free shipping
                </p>
              </div>
              <div className="flex gap-2">
                <p className="text-sm font-medium font-public text-black">
                  Courier:
                </p>
                <p className="text-gray-text font-public font-normal text-sm">
                  2-3 days, of free shipping
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
