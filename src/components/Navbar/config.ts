interface INavbarLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export const NAVBAR_LINKS: INavbarLink[] = [
  { label: "Главная", href: "#home", ariaLabel: "Home" },
  { label: "Функционал", href: "#features", ariaLabel: "Features" },
  { label: "План развития", href: "#development", ariaLabel: "Development" },
  { label: "О нас", href: "#about", ariaLabel: "About" },
  { label: "Вопросы и ответы", href: "#faq", ariaLabel: "Faq" },
  { label: "Подключиться", href: "#feedback", ariaLabel: "Feedback" },
  { label: "Контакты", href: "#contacts", ariaLabel: "Contacts" },
];
