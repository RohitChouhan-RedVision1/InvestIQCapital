import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaGlobeAsia,
  FaMoneyCheckAlt,
  FaLandmark,
  FaUserShield,
  FaChartPie,
  FaRegCheckCircle,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";
import TopTaxSavingFunds from "@/components/MutalfundSection/TopPerformanceFund/page"; // Optional placeholder

const nriFeatures = [
  {
    icon: <FaGlobeAsia className="text-3xl text-primary" />,
    title: "India Investment Access",
    description:
      "Explore safe and high-return opportunities in Mutual Funds, FDs, Bonds, NPS, and more from abroad.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-3xl text-primary" />,
    title: "NRE/NRO Account Guidance",
    description:
      "Get help setting up and managing NRE/NRO/FCNR accounts for seamless fund repatriation and taxation.",
  },
  {
    icon: <FaChartPie className="text-3xl text-primary" />,
    title: "Tax Planning for NRIs",
    description:
      "Minimize your Indian tax liabilities with proper DTAA usage, capital gain strategies, and exemptions.",
  },
  {
    icon: <FaLandmark className="text-3xl text-primary" />,
    title: "Real Estate Advisory",
    description:
      "Buy, sell, or manage property in India with full legal and financial support tailored for NRIs.",
  },
  {
    icon: <FaUserShield className="text-3xl text-primary" />,
    title: "Regulatory Compliance",
    description:
      "Stay compliant with FEMA, RBI, and Indian tax laws when investing or transferring funds.",
  },
];

export const metadata = {
  title: "NRI Financial Services",
  description:
    "End-to-end financial solutions for Non-Resident Indians including investments, NRE/NRO accounts, tax planning, and real estate advisory.",
};

const NriServices = () => {
  return (
    <div>
      {/* Heading */}
      <InnerBanner pageName={"NRI Services"} />

      {/* Intro Section */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
           <div className="md:w-1/2">
                     <p className="text-lg text-gray-300 text-justify">
                      Our As an NRI, managing your finances in India can be challenging. Our NRI   
Services are designed to provide you with expert guidance and support. Our   
advisors will help you with:  -
                     </p>
                   
                      <ul className="space-y-3">
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                          
                           <span className="text-gray-300">
                             Investment options and strategies for NRIs  
                           </span>
                         </li>
                   
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                           <span className="text-gray-300">
                            Tax planning and compliance for NRIs  
                           </span>
                         </li>
                   
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                           <span className="text-gray-300">
                              Portfolio management and wealth management services  
                           </span>
                         </li>
                       </ul>
                   
                     <p className="text-lg text-gray-300 mt-4 text-justify">
                       With InvestIQ Capital's NRI Services, you can trust that your financial   
interests in India are being taken care of.
                     </p>
                   </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/nri-services.webp"
              alt="NRI Financial Services"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      {/* <div className="max-w-screen-xl mx-auto main_section1">
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          What We Offer to{" "}
          <span className="text-[var(--rv-secondary)]">NRIs</span>
        </h2>

        <TypesServices serviceTypes={nriFeatures} />
      </div> */}

      {/* Tools/Advisory */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          Explore <span className="text-[var(--rv-secondary)]">Top NRI</span>{" "}
          Investment Options
        </h2>

        <TopTaxSavingFunds /> {/* Optional: replace with NRI-focused component */}
      </div>

      {/* CTA */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Stay financially connected to India with ease and confidence. Let
            our expert NRI advisors help you manage, invest, and grow your
            wealth — securely and seamlessly.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Get Started with <br /> NRI Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NriServices;
