import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaRegCalendarCheck,
  FaUserFriends,
  FaChartPie,
  FaCoins,
  FaBullseye,
  FaRegCheckCircle,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";
import TopTaxSavingFunds from "@/components/MutalfundSection/TopPerformanceFund/page"; // Replace if needed

const planningFeatures = [
  {
    icon: <FaBullseye className="text-3xl text-primary" />,
    title: "Goal-Oriented Strategy",
    description:
      "Create a roadmap for your financial goals such as retirement, education, home purchase, and more.",
  },
  {
    icon: <FaRegCalendarCheck className="text-3xl text-primary" />,
    title: "Lifetime Planning",
    description:
      "Plan your entire financial life including income, expenses, assets, and liabilities.",
  },
  {
    icon: <FaChartPie className="text-3xl text-primary" />,
    title: "Smart Budgeting & Saving",
    description:
      "Control your spending, build emergency funds, and save consistently with expert guidance.",
  },
  {
    icon: <FaCoins className="text-3xl text-primary" />,
    title: "Investment Roadmap",
    description:
      "Get customized investment planning across asset classes based on your risk profile.",
  },
  {
    icon: <FaUserFriends className="text-3xl text-primary" />,
    title: "Family Protection",
    description:
      "Ensure your family’s future with the right insurance coverage and estate planning.",
  },
];

export const metadata = {
  title: "Financial Planning Services",
  description:
    "Secure your financial future with personalized financial planning services designed to help you achieve your life goals.",
};

const FinancialPlanning = () => {
  return (
    <div>
      {/* Heading */}
      <InnerBanner pageName={"Financial Planning"} />

      {/* Introduction */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
         <div className="md:w-1/2">
           <p className="text-lg text-gray-300 text-justify">
            Our Financial Planning services help you create a comprehensive plan to   
achieve your financial goals. Our advisors will work with you to:-
           </p>
         
            <ul className="space-y-3">
               <li className="flex items-start space-x-3">
                 <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                
                 <span className="text-gray-300">
                   Assess your current financial situation and identify areas for improvement    
                 </span>
               </li>
         
               <li className="flex items-start space-x-3">
                 <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                 <span className="text-gray-300">
                  Develop a customized financial plan tailored to your goals and objectives  
                 </span>
               </li>
         
               <li className="flex items-start space-x-3">
                 <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                 <span className="text-gray-300">
                    Provide guidance on investment, tax, retirement, and estate planning   
                 </span>
               </li>
             </ul>
         
           <p className="text-lg text-gray-300 mt-4 text-justify">
             With InvestIQ Capital's Financial Planning services, you can gain clarity and   
confidence in your financial decisions.   
           </p>
         </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/financial-planning.webp"
              alt="Financial Planning"
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
          <span className="text-[var(--rv-secondary)]">Financial Planning</span>
        </h2>
        <TypesServices serviceTypes={planningFeatures} />
      </div> */}

      {/* Strategic Tools / Placeholder */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          <span className="text-[var(--rv-secondary)]">Plan</span> Your Future Smartly
        </h2>
        <TopTaxSavingFunds /> {/* You can replace this with retirement planner, risk profile tool, etc. */}
      </div>

      {/* Call To Action */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Don't leave your financial future to chance. Get expert financial
            planning that aligns with your goals, risk tolerance, and life
            stage. Start planning your future today!
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Start Your <br /> Financial Planning Today!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanning;
