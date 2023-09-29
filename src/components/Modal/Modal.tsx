import { CloseIcon } from "assets";
import { motion, AnimatePresence } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  children: JSX.Element;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const Modal = ({ children, setIsModalOpen }: Props) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className="rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-4 xm:px-8 sm:px-16 backdrop-blur-xl sm:mb-8 fixed mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute h-5 w-5 top-2 right-3"
            onClick={() => setIsModalOpen(false)}
          >
            <CloseIcon />
          </button>
          {children}
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
