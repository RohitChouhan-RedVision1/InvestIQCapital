import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import { FaRegCheckCircle, FaChartBar, FaShieldAlt, FaMoneyBillWave } from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";

export const metadata = {
  title: "Fixed Income Options",
  description:
    "Explore Corporate FDs and Bonds for stable returns and lower risk with InvestIQ Capital.",
};

const CorporateFDTypes = [
  {
    icon: <FaChartBar className="text-3xl text-primary" />,
    description: " Invest in corporate FDs with high credit ratings and low risk",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    description: "Choose from a range of tenure options to suit your investment horizon",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-primary" />,
    description: "Benefit from regular interest income and relatively low risk  ",
  },
];

const BondTypes = [
  {
    icon: <FaMoneyBillWave className="text-3xl text-primary" />,
    description: " Invest in a range of bond types, including corporate bonds, government bonds, and more  ",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    description: " Choose from different tenure options to suit your investment horizon  ",
  },
  {
    icon: <FaChartBar className="text-3xl text-primary" />,
    description: "Benefit from regular interest income and relatively low risk  ",
  },
];

const FixedIncome = () => {
  return (
    <div>
      {/* Banner */}
      <InnerBanner pageName="Fixed Income Options" />

      {/* Intro Section */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div>
            <p className="text-lg text-gray-300 text-justify">
              Looking for stable returns with relatively low risk? Consider investing in   
Corporate Fixed Deposits (FDs) and Bonds. These debt instruments offer   
regular interest income and predictable returns, making them ideal for risk
averse investors.  
            </p>
          </div>
        </div>
      </div>

      {/* Corporate FDs */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
            <h2 className="text-xl text-gray-300 text-justify mb-4">
              Corporate Fixed Deposits (FDs)
            </h2>
            {/* <p className="text-lg text-gray-300 text-justify">
              Corporate FDs often provide higher returns than traditional bank FDs. With InvestIQ
              Capital’s options, you can:
            </p> */}
            <ul className="space-y-3 mt-4">
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300"> Higher Returns: Corporate FDs often offer higher interest rates than   
traditional bank FDs  </span>
              </li>
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Low Risk: Invest in companies with high credit ratings to minimize risk  
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Regular Income: Receive regular interest income to meet your financial   
goals  
                </span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/corporate-fds-1.jpg"
              alt="Corporate Fixed Deposits"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features */}
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          With <span className="text-[var(--rv-secondary)]">InvestIQ Capital, </span>you can 
        </h2>
        <TypesServices serviceTypes={CorporateFDTypes} />
      </div>

      {/* Bonds */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/Bonds-NCDs-2.jpg"
              alt="Bonds Investment"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl text-gray-300 text-justify mb-4">Bonds</h2>
            <p className="text-lg text-gray-300 text-justify">
              Bonds are ideal for investors seeking predictable income with lower risk. With
              InvestIQ Capital’s bond options, you can:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Invest in corporate, government, and other bond types
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Choose from different tenure options to match your horizon
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Enjoy predictable income with relatively low risk
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features */}
       <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          With <span className="text-[var(--rv-secondary)]">InvestIQ Capital, </span>you can
        </h2>
        <TypesServices serviceTypes={BondTypes} />
      </div>

      {/* CTA */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Secure your wealth with stable, low-risk investments. Whether through Corporate FDs or
            Bonds, InvestIQ Capital helps you achieve your financial goals with confidence.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Start Investing Today <br /> Talk to Our Experts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FixedIncome;
