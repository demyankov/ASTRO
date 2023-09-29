import * as Yup from "yup";

export const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Имя может состоять из букв латинского и русского алфавита
export const USERNAME_PATTERN = /^([a-z ]+|[а-яё ]+)$/iu;

export const emailValidation = Yup.string()
  .min(4, "Введите не менее 4 символов")
  .matches(EMAIL_PATTERN, "Некорректный email")
  .required("Обязательное для заполнения поле");

export const nameValidation = Yup.string()
  .min(2, "Введите не менее 2 символов")
  .matches(USERNAME_PATTERN, "Допускаются только буквы")
  .max(25, "Введите не более 25 символов")
  .required("Обязательное для заполнения поле");

export const schema = Yup.object().shape({
  email: emailValidation,
  name: nameValidation,
});

interface IFormData {
  type: "text" | "email";
  placeholder: string;
  id: "name" | "email";
}

export const FORM_DATA: IFormData[] = [
  { type: "text", placeholder: "Имя", id: "name" },
  { type: "email", placeholder: "Электронная почта", id: "email" },
];
