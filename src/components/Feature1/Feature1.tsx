import { motion } from "framer-motion";

import feature1 from "assets/images/feature1.jpg";
import feature2 from "assets/images/feature2.jpg";
import feature3 from "assets/images/feature3.jpg";
import feature4 from "assets/images/feature4.jpg";
import { CheckArrowIcon } from "assets/icons/CheckArrowIcon";

export const Feature1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 pt-12 pb-10 lg:py-14"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <h2 className="custom-block-big-title mt-6 mb-8 text-center w-full">
            Преимущества и функционал
          </h2>
          <div className="w-full lg:w-1/2">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <h3 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-title">
                Турнирный модуль
              </h3>
              <p className="mb-5 md:mb-10 text-customGrayText leading-loose">
                Посредством данного модуля Вам будут доступны следующие функции:
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-2 md:mb-4 flex">
                  <CheckArrowIcon />
                  <span>Автоматическое формирование турнирной сетки</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Создание отдельного матча</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Генерация сервера под каждый отдельный матч</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>
                    Формирование и ведение статистики проведенных матчей
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={feature1}
                  alt="f1"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={feature2}
                  alt="f2"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature3}
                  alt="f3"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature4}
                  alt="f4"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
