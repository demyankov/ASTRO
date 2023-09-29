import { motion } from "framer-motion";
import { FeedbackForm } from "components/FeedbackForm/FeedbackForm";

export const Feedback = () => (
  <section className="w-full bg-customDarkBg2 py-10 sm:py-16" id="feedback">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mx-auto 2xl:w-[1450px] xl:w-[1300px] w-11/12 md:pl-4 xl:pr-16 xl:pl-16">
        <div className="flex flex-col items-center">
          <h2 className="custom-block-big-title mx-6 mb-6 text-center">
            Как подключиться?
          </h2>
          <p className="mb-10 text-customGrayText leading-loose">
            Оставьте заявку и мы свяжемся с Вами
          </p>
        </div>
        <FeedbackForm />
      </div>
    </motion.div>
  </section>
);
