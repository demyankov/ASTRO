interface IItem {
  id: string;
  title: string;
  description: string;
}

interface IAbout {
  mainTitle: string;
  text: string;
  items: IItem[];
}

export const ABOUT_DATA: IAbout = {
  mainTitle: "О нас",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisciea consectetur laborum illo maxime rerum totam unde, expedita aut obcaecati. Fugiat accusantium non quia adipisci voluptate magnam ipsa enim optio",
  items: [
    {
      id: "1",
      title: "35+",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisciea consectetur laborum illo maxime rerum totam unde, expedita aut obcaecati.",
    },
    {
      id: "2",
      title: "8 markets",
      description:
        " Adipisciea consectetur laborum illo maxime rerum totam unde, expedita aut obcaecati.",
    },
    {
      id: "3",
      title: "7 years",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ],
};
