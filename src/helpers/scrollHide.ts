export const scrollHide = (isOpen: boolean) => {
  if (!document) return;

  if (isOpen) {
    document.body.style.overflowY = "hidden";
    document.body.style.touchAction = "none";
    return;
  } else {
    document.body.style.overflowY = "auto";
    document.body.style.touchAction = "auto";
  }
};
