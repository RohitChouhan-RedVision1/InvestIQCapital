"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

const SubscribCard = ({amclogos}) => {
  

  return (
    <div className="bg-[var(--rv-ternary)]">
    <div className="max-w-screen-xl main_section mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-[var(--rv-white)] text-center">
          Our <span className="text-[var(--rv-secondary)]">Partners</span>
        </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
        custom={2}
        className="em_bar mx-auto"
      >
        <div className="em_bar_bg" />
      </motion.div>

      <Carousel
        className="w-full mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {amclogos.map((logo, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/5"
            >
              <div className="px-5 main_section">
                <a
                  href={logo.logourl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`https://redvisionweb.com/${logo.logo}`}
                    alt={logo.logoname}
                    width={160}
                    height={180}
                    className="opacity-80 hover:opacity-100 transition ease-in-out duration-75 "
                  />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
    </div>
  );
};

export default SubscribCard;
