import {
  DataIcon,
  TrophyIcon,
  PCIcon,
  feature1,
  feature2,
  feature3,
} from "assets";

interface IDevPlan {
  id: string;
  image: string;
  icon: () => JSX.Element;
  description: string;
}

export const DEV_PLAN: IDevPlan[] = [
  {
    id: "0",
    image: feature1,
    icon: TrophyIcon,
    description: "Добавить возможность проведения турниров по иным дисциплинам",
  },
  {
    id: "1",
    image: feature2,
    icon: PCIcon,
    description:
      "Добавить возможность вести учет продаваемых и распространяемых товаров и услуг",
  },
  {
    id: "2",
    image: feature3,
    icon: DataIcon,
    description: "Создание оболочки (Shell) для ПК",
  },
];
