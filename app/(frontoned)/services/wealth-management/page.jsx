import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaUserTie,
  FaChartLine,
  FaShieldAlt,
  FaPiggyBank,
  FaRegLightbulb,
  FaRegCheckCircle,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";
import TopTaxSavingFunds from "@/components/MutalfundSection/TopPerformanceFund/page"; // Replace if needed

const wealthFeatures = [
  {
    icon: <FaUserTie className="text-3xl text-primary" />,
    title: "Personalized Advisory",
    description:
      "Tailored financial strategies based on your goals, income, and risk profile.",
  },
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "Portfolio Management",
    description:
      "Regular review and rebalancing of your portfolio to maximize returns and minimize risks.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    title: "Risk Management",
    description:
      "Comprehensive planning to protect your wealth through insurance, asset allocation, and diversification.",
  },
  {
    icon: <FaPiggyBank className="text-3xl text-primary" />,
    title: "Goal-Based Planning",
    description:
      "Strategic planning to achieve financial milestones like retirement, education, or buying property.",
  },
  {
    icon: <FaRegLightbulb className="text-3xl text-primary" />,
    title: "Tax Optimization",
    description:
      "Structure your investments to save on taxes while maximizing post-tax returns.",
  },
];

export const metadata = {
  title: "Wealth Management Services",
  description:
    "Achieve your long-term financial goals with our expert wealth management services tailored to your unique needs.",
};

const WealthManagement = () => {
  return (
    <div>
      {/* Heading */}
      <InnerBanner pageName={"Wealth Management"} />

      {/* Introduction */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
  <p className="text-lg text-gray-300 text-justify">
   Our Wealth Management services are designed to help you grow and   
protect your wealth. Our experienced advisors will work with you to:-
  </p>

   <ul className="space-y-3">
      <li className="flex items-start space-x-3">
        <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
        <span className="text-gray-300">
          Develop a customized investment strategy tailored to your goals and risk   
tolerance  
        </span>
      </li>

      <li className="flex items-start space-x-3">
        <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
        <span className="text-gray-300">
         Manage your investments to optimize returns and minimize risk  
        </span>
      </li>

      <li className="flex items-start space-x-3">
        <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
        <span className="text-gray-300">
          Monitor and adjust your portfolio as needed to ensure it remains aligned   
with your objectives  
        </span>
      </li>
    </ul>

  <p className="text-lg text-gray-300 mt-4 text-justify">
    With InvestIQ Capital's Wealth Management services, you can trust that your   
wealth is in good hands.  
  </p>
</div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/wealth-management.webp"
              alt="Wealth Management"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      {/* <div className="max-w-screen-xl mx-auto main_section1">
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          Key Benefits of{" "}
          <span className="text-[var(--rv-secondary)]">Wealth Management</span>
        </h2>
        <TypesServices serviceTypes={wealthFeatures} />
      </div> */}

      {/* Placeholder for Top Strategies */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          <span className="text-[var(--rv-secondary)]">Top Wealth</span>{" "}
          Strategies
        </h2>

        <TopTaxSavingFunds /> {/* You can replace with custom wealth strategies component */}
      </div>

      {/* Call To Action */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Let our wealth experts guide your financial journey with a
            customized plan that suits your needs. Start today to secure your
            future with confidence.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Start Your <br /> Wealth Management Plan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WealthManagement;
