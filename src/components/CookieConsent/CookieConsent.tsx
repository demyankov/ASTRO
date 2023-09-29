import { useCookies } from "react-cookie";

export const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const isConsent = cookies.cookieConsent;

  const setCookieConsent = () => setCookie("cookieConsent", "true");

  return (
    <div
      className={`bg-customDarkBg1 fixed gap-3 bottom-0 w-full flex flex-col md:flex-row text-center items-center md:text-justify p-5 border-t-[1px] border-solid border-customGrayBorder z-50 ${
        isConsent && "hidden"
      }`}
    >
      <p className="flex-1 text-white">
        Мы используем cookie. Это позволяет нам анализировать взаимодействие
        посетителей с сайтом и делать его лучше. Продолжая пользоваться сайтом,
        Вы соглашаетесь с использованием файлов cookie
      </p>
      <div>
        <button
          type="button"
          className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 relative "
          onClick={setCookieConsent}
        >
          Согласен
        </button>
      </div>
    </div>
  );
};
