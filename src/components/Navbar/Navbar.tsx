import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "assets";
import { NAVBAR_LINKS } from "./config";
import { sendButtonClick, scrollHide } from "helpers";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
    sendButtonClick("navigationClick");
  };

  useEffect(() => {
    scrollHide(isOpen);
  }, [isOpen]);

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed top-0 bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <Logo />
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-8 pb-2">
            {NAVBAR_LINKS.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
                onClick={() => {
                  sendButtonClick("navigationClick");
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <div
          className="h-10 w-10 lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-5 h-0.5 bg-gray-500  mb-1 ${
              isOpen && "translate-y-[300%] rotate-45"
            }`}
          />
          <div
            className={`w-5 h-0.5 bg-gray-500  mb-1 ${isOpen && "hidden"}`}
          />
          <div
            className={`w-5 h-0.5 bg-gray-500 ${isOpen && "rotate-[-45deg]"}`}
          />
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="min-h-[100vh] flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10"
            >
              {NAVBAR_LINKS.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={handleClick}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
