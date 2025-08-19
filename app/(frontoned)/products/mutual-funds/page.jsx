import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaBalanceScale,
  FaUserTie,
  FaMoneyBillWave,
  FaPiggyBank,
  FaReceipt,
  FaChartBar,
  FaRegCheckCircle,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";
import TopTaxSavingFunds from "@/components/MutalfundSection/TopPerformanceFund/page";

const fundTypes = [
  {
    icon: <FaBalanceScale className="text-3xl text-primary" />,
    title: " Diversification",
    description:
      " Spread risk across multiple assets and sectors  ",
  },
  {
    icon: <FaUserTie className="text-3xl text-primary" />,
    title: "Professional Management",
    description:
      "Experienced fund managers make informed investment decisions",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-primary" />,
    title: "Convenience",
    description:
      "Easy to invest and track your portfolio",
  },
 
  // {
  //   icon: <FaChartBar className="text-3xl text-primary" />,
  //   title: "Transparency",
  //   description:
  //     "Regular updates on fund performance and NAV ensure you stay informed about your investment.",
  // },
];

export const metadata = {
  title: "Mutual Fund Services",
  description:
    "Invest in mutual funds to diversify your portfolio and achieve long-term financial growth with professional management.",
};

const MutualFunds = () => {
  return (
    <div>
      {/* Heading and Subheading */}
      <InnerBanner pageName={"Mutual Funds"} />

      <div className="max-w-screen-xl mx-auto main_section1 ">
        {/* Introduction with Image */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
                     <p className="text-lg text-gray-300 text-justify">
                      Mutual funds are an excellent way to grow your wealth while reducing   
individual investment risk. By pooling resources from multiple investors,   
mutual funds provide you with exposure to a variety of asset classes like   
equities, bonds, and more. With professional management, they offer a   
balanced approach to building wealth for both beginners and seasoned   
investors. With InvestIQ Capital, you can:  
:-
                     </p>
                   
                      <ul className="space-y-3">
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                          
                           <span className="text-gray-300">
                              Invest in a wide range of mutual fund categories, including equity, debt,   
hybrid, and more      
                           </span>
                         </li>
                   
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                           <span className="text-gray-300">
                            Choose from a variety of fund managers and investment styles  
                           </span>
                         </li>
                   
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                           <span className="text-gray-300">
                              Benefit from professional fund management and research-driven   
investment decisions     
                           </span>
                         </li>
                       </ul>
{/*                    
                     <p className="text-lg text-gray-300 mt-4 text-justify">
                       With InvestIQ Capital's Financial Planning services, you can gain clarity and   
          confidence in your financial decisions.   
                     </p> */}
                   </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/mutual-fund-1.jpg"
              alt="Investment Growth"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Types of Mutual Funds */}
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          Key Benefits of{" "}
          <span className="text-[var(--rv-secondary)]">Mutual Funds</span>
        </h2>

        <TypesServices serviceTypes={fundTypes} />
      </div>

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Types of Mutual Funds */}
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          <span className="text-[var(--rv-secondary)]">Top Performing </span>{" "}
          Funds
        </h2>

        <TopTaxSavingFunds  />
      </div>

      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Whether you&apos;re just starting out or are looking to diversify
            your portfolio, mutual funds are a great way to achieve your
            financial goals. With professional management, diversified
            investment options, and low entry costs, mutual funds provide a
            smart path to long-term growth. Begin your investment journey today!
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Start Investing in <br /> Mutual Funds Today!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;
