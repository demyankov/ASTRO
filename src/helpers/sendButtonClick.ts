import { extendedWindow } from "./extendedWindow";

export const sendButtonClick = (target?: string) => {
  const id = 94366777;

  if (extendedWindow.isTestEnvironment) {
    return;
  }

  try {
    if (target && extendedWindow.ym) {
      extendedWindow.ym(id, "reachGoal", target);
    }
  } catch (e) {
    console.log(e);
  }
};
