import { FC, useState } from "react";
import { motion } from "framer-motion";
import { FAQ_DATA } from "components/Faq/config";
import { FaqBox } from "./FaqBox/FaqBox";

export const Faq: FC = () => {
  const [openBoxId, setOpenBoxId] = useState<string>(FAQ_DATA[0].id);

  const handleOpen = (id: string) => {
    const currentId = openBoxId === id ? "-1" : id;
    setOpenBoxId(currentId);
  };

  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute top-10" id="faq" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
          <div className="md:max-w-4xl mx-auto">
            <p className="mb-7 custom-block-subtitle text-center">
              Have any questions?
            </p>
            <h2 className="mb-6 md:mb-16 custom-block-big-title text-center">
              Frequently Asked Questions
            </h2>
            <div className="mb-11 flex flex-wrap -m-1">
              {FAQ_DATA.map(({ id, question, answer }) => (
                <div key={id} className="w-full p-1">
                  <FaqBox
                    title={question}
                    content={answer}
                    id={id}
                    key={id}
                    isOpen={openBoxId === id}
                    handleOpen={handleOpen}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
