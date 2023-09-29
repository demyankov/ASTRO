import { motion } from "framer-motion";
import { FC, MouseEvent, useState } from "react";
import { Divider } from "components/Divider/Divider";
import { DEV_PLAN } from "./config";
import { Line, EmptyLine } from "components";

const count = DEV_PLAN.length;
const demiStep = 50 / count;

export const Development: FC = () => {
  const [progressLine, setprogressLine] = useState(demiStep);
  const [activeButton, setActiveButton] = useState(DEV_PLAN[0].id);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const id = +e.currentTarget.id;
    const isLast = id === count - 1;
    const isFirst = id === 0;

    let width = isLast
      ? 100
      : isFirst
      ? demiStep
      : demiStep + 2 * demiStep * id;

    setActiveButton(id.toString());
    setprogressLine(width);
  };

  return (
    <section
      id="development"
      className="lg:mb-16 w-full flex flex-col items-center bg-customDarkBg1 "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ width: "100%" }}
      >
        <div className="2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <h2 className="custom-block-big-title mt-10 sm:mt-20 mb-10 sm:mb-20 text-center w-full ">
            План развития
          </h2>
          <div className="min-w-full flex justify-around text-5xl">
            {DEV_PLAN.map(({ id, icon: Icon }, i) => (
              <div
                key={id}
                className={`custom-button ${
                  activeButton === id && "active"
                } mb-5 max-w-[40px] sm:max-w-[60px] lg:max-w-[80px]`}
                id={`${i}`}
                onClick={handleClick}
              >
                <Icon />
              </div>
            ))}
          </div>
          <div className="relative mb-8 sm:mb-12">
            <EmptyLine />
            <Line progressLine={progressLine} />
          </div>

          <div className="py-10 sm:py-5 lg:py-10 px-3 sm:px-8 my-8 lg:mb-10 rounded-3xl bg-customDarkBg3 custom-border-gray-darker relative text-center text-white ">
            {DEV_PLAN[+activeButton].description}
          </div>
          <Divider />

          <div className="w-4/5 lg:w-1/2 flex justify-center mx-auto lg:pt-0 my-8 sm:my-10">
            <img
              src={DEV_PLAN[+activeButton].image}
              alt="f1"
              className="rounded-xl  custom-border-gray "
            />
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
    </section>
  );
};
