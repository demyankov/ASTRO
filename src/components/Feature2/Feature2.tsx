import { motion } from "framer-motion";

import feature5 from "assets/images/feature5.jpg";
import feature6 from "assets/images/feature6.jpg";
import { CheckArrowIcon } from "assets/icons/CheckArrowIcon";

export const Feature2 = () => (
  <section className="w-full mt-8 mb-10 lg:my-14 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={feature5}
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={feature6}
                alt="f2"
                className="rounded-xl  custom-border-gray"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <h3 className="mt-3 md:mt-6 mb-8 text-4xl lg:text-5xl custom-block-title">
              Модуль резервирования
            </h3>
            <p className="mb-6 md:mb-12 text-customGrayText leading-loose">
              Доступный с любого устройства модуль, который включает в себя
              следующие функции:
            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>
                  Дистанционное бронирование компьютеров с выбором свободной
                  даты и времени
                </span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>
                  Дистанционное бронирование игровых консолей с выбором
                  свободной даты и времени
                </span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>
                  Ведение базы данных клиентов с сортировкой и поиском
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
