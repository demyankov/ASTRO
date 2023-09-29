import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "components";
import { FeedbackForm } from "components/FeedbackForm/FeedbackForm";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen min-h-screen flex flex-col justify-between items-center bg-customDarkBg1 hero-bg-gradient"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex-1 flex flex-col justify-between items-center mt-16 md:mt-32 lg:mt-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-lg md:text-xl lg:text-2xl xl:text-3xl mt-6 sm:mt-12 md:mt-14 lg:mt-16 px-10 sm:px-15 ">
            Масштабируйте бизнес с улучшенным функционалом
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white px-8 sm:px-8 md:px-20 lg:px-4 mt-12 sm:mt-18  md:mt-22 lg:mt-30">
            Автоматизация компьютерных клубов
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-lg lg:text-xl xl:text-2xl mt-10 sm:mt-16 md:mt-20 lg:mt-20 px-10  sm:px-15">
            Вы увидите как рутинная работа становится легче с нами
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-20 sm:mt-24 md:mt-36 lg:mt-30 justify-center">
            <button
              className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
            >
              Попробовать сейчас
            </button>
            <button
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
              onClick={() => window.location.assign("signin")}
            >
              Войти
            </button>
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center flex-1 items-end">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 flex-1 hidden sm:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <>
            <div className="flex flex-col items-center">
              <h2 className="custom-block-big-title mx-6 mb-6 text-center">
                Как подключиться?
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                Оставьте заявку и мы свяжемся с Вами
              </p>
            </div>
            <FeedbackForm />
          </>
        </Modal>
      )}
    </section>
  );
};
