import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaRegCheckCircle,
  FaChartLine,
  FaCoins,
  FaHandHoldingUsd,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";

export const metadata = {
  title: "Direct Equity",
  description:
    "Direct equity investing involves buying and selling individual stocks, offering growth opportunities and dividend income.",
};

// Key Benefits section cards
const directEquityFeatures = [
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "Potential for Long-term Growth",
    description: "Stocks can offer high returns over the long term  ",
  },
  {
    icon: <FaCoins className="text-3xl text-primary" />,
    title: "Dividend Income",
    description: "Receive regular dividend income from your stock holdings  ",
  },
  {
    icon: <FaHandHoldingUsd className="text-3xl text-primary" />,
    title: "Control",
    description:
      " Direct equity investing gives you control over your investment decisions ",
  },
];

const DirectEquity = () => {
  return (
    <div>
      {/* Banner */}
      <InnerBanner pageName="Direct Equity" />

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-300 text-justify">
              Direct equity investing involves buying and selling individual
              stocks. It offers potential for long-term growth and dividend
              income, making it suitable for investors willing to take
              calculated risks. With direct equity, you can invest in companies
              you believe in and potentially benefit from their growth. With
              InvestIQ Capital, you can:-
            </p>

            <ul className="space-y-3 mt-4">
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Invest in a wide range of stocks across different sectors and
                  industries
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Benefit from potential long-term growth and dividend income
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Develop a diversified portfolio to minimize risk
                </span>
              </li>
            </ul>
          </div>

          {/* Right side image */}
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/equity.jpg"
              alt="Direct Equity"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          Key Benefits of{" "}
          <span className="text-[var(--rv-secondary)]">Direct Equity</span>
        </h2>
        <TypesServices serviceTypes={directEquityFeatures} />
      </div>

      {/* CTA Section */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Ready to explore the potential of direct equity investing? Our
            experts can help you build a diversified stock portfolio designed
            for long-term growth.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Get Expert <br /> Direct Equity Advice
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DirectEquity;
