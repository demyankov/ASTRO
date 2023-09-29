import { motion } from "framer-motion";
import type { FC } from "react";
import { ABOUT_DATA } from "./config";

export const About: FC = () => {
  const { mainTitle, text, items } = ABOUT_DATA;
  return (
    <section className="w-full bg-customDarkBg2 py-8 lg:py-16" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <h2 className="custom-block-big-title mt-6 mb-8">{mainTitle}</h2>
              <p className=" text-customGrayText leading-loose"> {text}</p>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 lg:-mx-4 sm:pr-8 lg:pl-4 xl:px-8 mt-6">
            {items.map((item) => (
              <div key={item.id}>
                <h3 className="my-2 lg:text-5xl custom-block-title">
                  {item.title}
                </h3>
                <p className="mb-4 md:mb-10 text-customGrayText leading-loose">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
