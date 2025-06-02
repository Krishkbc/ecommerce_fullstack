import Facebook from "../../assests/Header/SocialMediaLogo/Facebook.svg";
import Instagram from "../../assests/Header/SocialMediaLogo/Instagram.svg";
import Reddit from "../../assests/Header/SocialMediaLogo/Reddit.svg";
import Youtube from "../../assests/Header/SocialMediaLogo/Youtube.svg";
import Twitter from "../../assests/Header/SocialMediaLogo/Twitter.svg";
import Pinterest from "../../assests/Header/SocialMediaLogo/Pinterest.svg";
import USA from "../../assests/Header/USA.png";
import Mandarin from "../../assests/Header/Chinese.png";
import Russian from "../../assests/Header/Russian.png";
import Check from "../../assests/Header/Check.svg";
import ArrowUp from "../../assests/Header/ArrowUp.svg";

import { useState } from "react";

export default function NavBar() {
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);
  const [isCurrencyVisible, setIsCurrencyVisible] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  const handleClickLanguage = () => {
    setIsLanguageVisible(!isLanguageVisible);
  };

  const handleClickCurrency = () => {
    setIsCurrencyVisible(!isCurrencyVisible);
  };

  return (
    <div className="bg-secondary py-1">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center ">
          <p className="font-public font-normal text-sm text-white">
            Free Shipping on all orders over $100
          </p>
          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <p className="font-public font-normal text-sm text-white">
                  Follow Us:
                </p>
                <div className="flex items-center gap-2">
                  <img src={Facebook} alt="Facebook" />
                  <img src={Instagram} alt="Instagram" />
                  <img src={Reddit} alt="Reddit" />
                  <img src={Youtube} alt="Youtube" />
                  <img src={Twitter} alt="Twitter" />
                  <img src={Pinterest} alt="Pinterest" />
                </div>
              </div>

              <div className="h-5 w-[1px] bg-gray-400"></div>

              <div className="flex items-center gap-5 text-white relative z-50">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={handleClickLanguage}
                >
                  Eng
                  <img
                    src={ArrowUp}
                    alt="ArrowUp"
                    className={`w-4 h-4 ${
                      isLanguageVisible ? "rotate-180" : ""
                    }`}
                  />
                  {isLanguageVisible && (
                    <ul className="absolute top-full left-0 mt-2 bg-white shadow-md border border-gray-300 rounded-md w-40">
                      <li
                        onClick={() => setLanguage("English")}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-black flex ${
                          language === "english" ? "justify-between" : ""
                        } items-center gap-2 "`}
                      >
                        <img src={USA} alt="English" />
                        English
                        {language === "English" && (
                          <img src={Check} alt="Check" />
                        )}
                      </li>
                      <li
                        onClick={() => setLanguage("Mandarin")}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-black flex ${
                          language === "english" ? "justify-between" : ""
                        } items-center gap-2 "`}
                      >
                        <img src={Mandarin} alt="Mandarin" />
                        Mandarin
                        {language === "Mandarin" && (
                          <img src={Check} alt="Check" />
                        )}
                      </li>
                      <li
                        onClick={() => setLanguage("Russian")}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-black flex ${
                          language === "english" ? "justify-between" : ""
                        } items-center gap-2 "`}
                      >
                        <img src={Russian} alt="Russian" />
                        Russian
                        {language === "Russian" && (
                          <img src={Check} alt="Check" />
                        )}
                      </li>
                    </ul>
                  )}
                </div>

                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={handleClickCurrency}
                >
                  USD
                  <img
                    src={ArrowUp}
                    alt="ArrowUp"
                    className={`w-4 h-4 ${
                      isCurrencyVisible ? "rotate-180" : ""
                    }`}
                  />
                  {isCurrencyVisible && (
                    <ul className="absolute top-full left-0 mt-2 bg-white shadow-md border border-gray-300 rounded-md w-40">
                      <li
                        onClick={() => setCurrency("USD")}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-black flex items-center gap-2 ${
                          currency === "USD" ? "text-primary" : ""
                        }`}
                      >
                        Dollar (USD)
                        {currency === "USD" && <img src={Check} alt="Check" />}
                      </li>
                      <li
                        onClick={() => setCurrency("EUR")}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-black flex items-center gap-2 ${
                          currency === "EUR" ? "text-primary" : ""
                        }`}
                      >
                        EURO (EUR)
                        {currency === "EUR" && <img src={Check} alt="Check" />}
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
