export default {
  removeFocus(): void {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  },
};
