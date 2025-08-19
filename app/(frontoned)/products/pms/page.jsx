import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaBriefcase,
  FaChartLine,
  FaHandHoldingUsd,
  FaUserTie,
  FaGlobeAsia,
  FaRegCheckCircle,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";

export const metadata = {
  title: "Portfolio Management Services (PMS)",
  description:
    "Grow your wealth with personalized Portfolio Management Services tailored for high-net-worth individuals.",
};

const pmsFeatures = [
  
  // {
  //   icon: <FaChartLine className="text-3xl text-primary" />,
  //   title: "Active Management",
  //   description:
  //     "Portfolios are actively monitored and adjusted based on market movements and opportunities.",
  // },
  {
    icon: <FaHandHoldingUsd className="text-3xl text-primary" />,
    title: "Professional Management",
    description:
      "Experienced fund managers make informed investment decisions  ",
  },
  {
    icon: <FaBriefcase className="text-3xl text-primary" />,
    title: "Customization",
    description:
      "Portfolios are tailored to your individual goals and risk tolerance  ",
  },
  // {
  //   icon: <FaUserTie className="text-3xl text-primary" />,
  //   title: "Expert Fund Managers",
  //   description:
  //     "Managed by experienced professionals with a proven track record in wealth creation.",
  // },
  {
    icon: <FaGlobeAsia className="text-3xl text-primary" />,
    title: "Regular Updates",
    description:
      "Receive regular updates and portfolio rebalancing",
  },
];

const PMS = () => {
  return (
    <div>
      {/* Banner */}
      <InnerBanner pageName="Portfolio Management Services (PMS)" />

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2">
                               <p className="text-lg text-gray-300 text-justify">
                               Portfolio Management Services (PMS) offer professionally managed   
investment portfolios tailored to individual investor goals and risk tolerance.   
With PMS, you can benefit from experienced fund managers and research
driven investment decisions, making it an ideal option for those seeking   
expert guidance. With InvestIQ Capital, you can:  
          :-
                               </p>
                             
                                <ul className="space-y-3">
                                   <li className="flex items-start space-x-3">
                                     <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                                    
                                     <span className="text-gray-300">
                                         Benefit from experienced fund managers and research-driven investment   
decisions        
                                     </span>
                                   </li>
                             
                                   <li className="flex items-start space-x-3">
                                     <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                                     <span className="text-gray-300">
                                       Choose from a range of portfolio options to suit your investment goals  
                                     </span>
                                   </li>
                             
                                   <li className="flex items-start space-x-3">
                                     <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                                     <span className="text-gray-300">
                                        Receive regular updates and portfolio rebalancing  
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
              src="/Services/pms-1.jpg"
              alt="PMS Investment"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          Key Benefits of{" "}
          <span className="text-[var(--rv-secondary)]">PMS</span>
        </h2>
        <TypesServices serviceTypes={pmsFeatures} />
      </div>

      {/* CTA Section */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Ready to take your investments to the next level? Our PMS solutions
            are crafted to help you grow and preserve wealth with a strategic,
            expert-led approach.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Get Expert <br /> Portfolio Management Advice
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PMS;
