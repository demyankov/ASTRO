import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendMessage } from "api/sendMessage";
import { Input } from "components";
import { useState } from "react";
import { schema, FORM_DATA } from "./config";
import { Loader } from "components/Loader/Loader";

interface IMessage {
  email: string;
  name: string;
}

export const FeedbackForm = () => {
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubminButtonActive, setIsSubminButtonActive] = useState(true);
  const [isShowResults, setIsShowResults] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<IMessage>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const isDisabled =
    isLoading || !isSubminButtonActive || !!Object.values(errors).length;

  const onSubmit = async () => {
    const { name, email } = getValues();
    const message = `Поступило новое обращение с сайта. Имя: ${name}, email: ${email}`;

    setIsLoading(true);

    if (message) {
      try {
        await sendMessage({ message });
        setIsSubminButtonActive(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(error as string);
        }
      } finally {
        reset();
        setIsLoading(false);
        setIsShowResults(true);
      }
    }
  };

  return (
    <div>
      <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
        {FORM_DATA.map(({ type, placeholder, id }) => (
          <Input
            key={id}
            register={register}
            type={type}
            placeholder={placeholder}
            id={id}
            warning={errors[id]?.message || null}
          />
        ))}
        <div className="relative w-full flex flex-col items-center">
          <button
            disabled={isDisabled}
            type="submit"
            className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 relative "
          >
            {isLoading && <Loader />}
            Связаться с нами
          </button>

          {isShowResults && (
            <div className="flex justify-center absolute bottom-[-100%] lg:bottom-[-70%]">
              <p
                className={`text-sm lg:text-md text-center mt-5 lg:mt-10  ${
                  error ? "text-[rgb(255,0,0)]" : "text-[rgb(0,255,0)]"
                }`}
              >
                {error
                  ? `Ошибка запроса. ${error}.`
                  : "Запрос отправлен. В кратчайшее время мы с Вами свяжемся."}
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
