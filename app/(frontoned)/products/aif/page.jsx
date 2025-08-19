import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaChartLine,
  FaUserShield,
  FaHandshake,
  FaCubes,
  FaBalanceScaleRight,
  FaRegCheckCircle,
  FaProjectDiagram,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";
import TopTaxSavingFunds from "@/components/MutalfundSection/TopPerformanceFund/page"; // Reuse or replace with AIF-specific component
import { FaUserTie } from "react-icons/fa6";

const aifFeatures = [
  {
    icon: <FaProjectDiagram className="text-3xl text-primary" />,
    title: "Diversification",
    description:
      "Alternative asset classes can provide diversification benefits.",
  },
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "Potential for High Returns",
    description:
      "AIFs can offer high returns over the long term.",
  },
  {
    icon: <FaUserTie className="text-3xl text-primary" />,
    title: "Expertise",
    description:
      "AIF managers have expertise in alternative asset classes.",
  },
];

export const metadata = {
  title: "Alternative Investment Funds (AIF)",
  description:
    "Explore high-growth investment opportunities through Alternative Investment Funds. Ideal for HNIs seeking diversification beyond traditional assets.",
};

const AIF = () => {
  return (
    <div>
      {/* Heading and Subheading */}
      <InnerBanner pageName={"AIF"} />

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction with Image */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
                      <p className="text-lg text-gray-300 text-justify">
                        Alternative Investment Funds (AIFs) provide investment opportunities in   
alternative asset classes like private equity, real estate, or hedge funds. 
They're suitable for sophisticated investors seeking diversification and   
potentially higher returns. With AIFs, you can invest in unique asset classes   
and diversify your portfolio. With InvestIQ Capital, you can:-
                      </p>
          
                      <ul className="space-y-3 mt-4">
                        <li className="flex items-start space-x-3">
                          <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                          <span className="text-gray-300">
                            Invest in alternative asset classes to diversify your portfolio  
                          </span>
                        </li>
          
                        <li className="flex items-start space-x-3">
                          <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                          <span className="text-gray-300">
                            Benefit from potential high returns and diversification benefits  
                          </span>
                        </li>
          
                        <li className="flex items-start space-x-3">
                          <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                          <span className="text-gray-300">
                            Choose from a range of AIF options to suit your investment goals  
                          </span>
                        </li>
                      </ul>
                    </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/aif-1.jpg"
              alt="AIF Investment"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Features of AIFs */}
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          Features of <span className="text-[var(--rv-secondary)]">AIF</span>
        </h2>

        <TypesServices serviceTypes={aifFeatures} />
      </div>

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Top Performing AIFs */}
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          <span className="text-[var(--rv-secondary)]">Top Performing</span> AIFs
        </h2>

        <TopTaxSavingFunds /> {/* Replace with AIF version if needed */}
      </div>

      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Discover high-return, non-traditional investment opportunities with
            AIFs. Take the next step toward financial diversification and wealth
            creation with our expert advisory team.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Start Investing in <br /> AIFs Today!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIF;
