import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import {
  FaHeartbeat,
  FaUserShield,
  FaHospital,
  FaUmbrella,
  FaFileMedicalAlt,
  FaRegCheckCircle,
} from "react-icons/fa";
import TypesServices from "@/components/OurBuisnnessModel/typesServices";
import TopTaxSavingFunds from "@/components/MutalfundSection/TopPerformanceFund/page";
import { FaCar } from "react-icons/fa6";

export const metadata = {
  title: "Insurance Services",
  description:
    "Protect yourself and your loved ones with our range of life, health, and general insurance plans tailored to your needs.",
};

const LifeinsuranceTypes = [
  {
    icon: <FaHeartbeat className="text-3xl text-primary" />,
    // title: "Life Insurance",
    description:
      " Financial protection for loved ones  ",
  },
  {
    icon: <FaUserShield className="text-3xl text-primary" />,
    // title: "Health Insurance",
    description:
      " Customizable policy options  ",
  },
  // {
  //   icon: <FaHospital className="text-3xl text-primary" />,
  //   title: "Critical Illness Cover",
  //   description:
  //     "Lump sum payout for serious illnesses like cancer or heart disease, giving you financial support when you need it most.",
  // },
  {
    icon: <FaUmbrella className="text-3xl text-primary" />,
    // title: "General Insurance",
    description:
      "Peace of mind knowing your family's future is secure  ",
  },
  // {
  //   icon: <FaFileMedicalAlt className="text-3xl text-primary" />,
  //   title: "Comprehensive Plans",
  //   description:
  //     "Tailored solutions combining life, health, and accident benefits in a single policy.",
  // },
];

const HealthinsuranceTypes = [
  // {
  //   icon: <FaHeartbeat className="text-3xl text-primary" />,
  //   // title: "Life Insurance",
  //   description:
  //     " Financial protection for loved ones  ",
  // },
  // {
  //   icon: <FaUserShield className="text-3xl text-primary" />,
  //   // title: "Health Insurance",
  //   description:
  //     " Customizable policy options  ",
  // },
  {
    icon: <FaHospital className="text-3xl text-primary" />,
    // title: "Critical Illness Cover",
    description:
      "Comprehensive coverage for medical expenses  ",
  },
  {
    icon: <FaUmbrella className="text-3xl text-primary" />,
    // title: "General Insurance",
    description:
      " Financial protection against medical emergencies   ",
  },
  {
    icon: <FaFileMedicalAlt className="text-3xl text-primary" />,
    // title: "Comprehensive Plans",
    description:
      "Customizable policy options  ",
  },
];


const MotorinsuranceTypes = [
  // {
  //   icon: <FaHeartbeat className="text-3xl text-primary" />,
  //   // title: "Life Insurance",
  //   description:
  //     " Financial protection for loved ones  ",
  // },
  // {
  //   icon: <FaUserShield className="text-3xl text-primary" />,
  //   // title: "Health Insurance",
  //   description:
  //     " Customizable policy options  ",
  // },
  {
    icon: <FaCar className="text-3xl text-primary" />,
    // title: "Critical Illness Cover",
    description:
      "Financial protection against vehicle damage or liability  ",
  },
  {
    icon: <FaUmbrella className="text-3xl text-primary" />,
    // title: "General Insurance",
    description:
      " Comprehensive coverage options     ",
  },
  {
    icon: <FaFileMedicalAlt className="text-3xl text-primary" />,
    // title: "Comprehensive Plans",
    description:
      "Customizable policy options  ",
  },
];

const Insurance = () => {
  return (
    <div>
      {/* Banner */}
      <InnerBanner pageName="Insurance Options  " />

      <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction */}
         <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <div >
            <p className="text-lg text-gray-300 text-justify">
              Protect yourself and your loved ones from life's uncertainties with our   
comprehensive insurance solutions. At InvestIQ Capital, we offer a range of   
insurance products designed to provide financial security and peace of mind.  
            </p>
          </div>
          
        </div>
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
           <div className="md:w-1/2">
            <h2 className="text-xl text-gray-300 text-justify mb-4">
              i. Life Insurance
            </h2>
                     <p className="text-lg text-gray-300 text-justify">
                      Life insurance provides a safety net for your loved ones, ensuring they're   
financially protected in the event of your passing. With InvestIQ Capital's life   
insurance options, you can:-
                     </p>
                   
                      <ul className="space-y-3">
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                          
                           <span className="text-gray-300">
                              Secure Your Family's Future: Ensure your loved ones are financially   
protected  
                           </span>
                         </li>
                   
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                           <span className="text-gray-300">
                            Customize Your Coverage: Tailor your policy with riders and add-ons to suit   
your needs    
                           </span>
                         </li>
                   
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                           <span className="text-gray-300">
                              Enjoy Peace of Mind: Know that your family's financial future is secure  
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
              src="/Services/life-insaurance.jpg"
              alt="Insurance Coverage"
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
          Key Benefits of <span className="text-[var(--rv-secondary)]">Life Insurance</span>
        </h2>
        <TypesServices serviceTypes={LifeinsuranceTypes} />
      </div>


        <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
           <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
            <Image
              src="/Services/health-insaurance.jpg"
              alt="Insurance Coverage"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
           
           <div className="md:w-1/2">
            <h2 className="text-xl text-gray-300 text-justify mb-4">
              ii. Health Insurance  
            </h2>
                     <p className="text-lg text-gray-300 text-justify">
                      Health insurance covers medical expenses, ensuring you receive quality   
healthcare without financial burden. With InvestIQ Capital's health   
insurance options, you can:-
                     </p>
                   
                      <ul className="space-y-3">
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                          
                           <span className="text-gray-300">
                              Protect Your Health and Finances: Cover medical expenses and   
hospitalization costs  
                           </span>
                         </li>
                   
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                           <span className="text-gray-300">
                            Customize Your Coverage: Add-ons and riders to suit your needs      
                           </span>
                         </li>
                   
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                           <span className="text-gray-300">
                              Enjoy Financial Security: Avoid financial stress due to medical emergencies  
                           </span>
                         </li>
                       </ul>
{/*                    
                     <p className="text-lg text-gray-300 mt-4 text-justify">
                       With InvestIQ Capital's Financial Planning services, you can gain clarity and   
          confidence in your financial decisions.   
                     </p> */}
                   </div>
          
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-screen-xl mx-auto main_section1">
        <h2 className="text-4xl text-[var(--rv-white)] text-center font-bold mb-4">
          Key Benefits of <span className="text-[var(--rv-secondary)]">Health Insurance</span>
        </h2>
        <TypesServices serviceTypes={HealthinsuranceTypes} />
      </div>

       <div className="max-w-screen-xl mx-auto main_section1">
        {/* Introduction */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
           
           
           <div className="md:w-1/2">
            <h2 className="text-xl text-gray-300 text-justify mb-4">
              iii. Motor Insurance  
            </h2>
                     <p className="text-lg text-gray-300 text-justify">
                      Motor insurance provides financial protection against vehicle damage or   
liability. With InvestIQ Capital's motor insurance options, you can:-
                     </p>
                   
                      <ul className="space-y-3">
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                          
                           <span className="text-gray-300">
                              Protect Your Vehicle and Finances: Cover vehicle damage or liability    
                           </span>
                         </li>
                   
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                           <span className="text-gray-300">
                            Customize Your Coverage: Add-ons and riders to suit your needs        
                           </span>
                         </li>
                   
                         <li className="flex items-start space-x-3">
                           <FaRegCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                           <span className="text-gray-300">
                              Enjoy Peace of Mind: Drive with confidence, knowing you're protected    
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
              src="/Services/motor-insaurance.jpg"
              alt="Insurance Coverage"
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
          Key Benefits of <span className="text-[var(--rv-secondary)]">Motor Insurance</span>
        </h2>
        <TypesServices serviceTypes={MotorinsuranceTypes} />
      </div>


      {/* CTA Section */}
      <div className="max-w-screen-xl mx-auto main_section">
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            Secure your future with the right insurance policy. Whether you need
            protection for yourself, your family, or your assets, we’re here to
            help you make the right choice.
          </p>
          <Link href="/contactus" className="text-[var(--rv-white)]">
            <Button className="bg-[var(--secondary)] text-[var(--rv-white)] rounded-2xl px-8 text-xl cursor-pointer">
              Protect What Matters <br /> Talk to Our Insurance Expert
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
