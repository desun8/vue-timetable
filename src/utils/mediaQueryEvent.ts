const smallScreen = window.matchMedia("(max-width: 63.999em)"); // 1023.984px

export const isSmallScreen = smallScreen.matches;

export const mediaQueryEvent = (
  cbMobile: Function,
  cbDesktop: Function
): void => {
  const handleTabletChange = (e: MediaQueryListEvent) => {
    if (e.matches) {
      // console.log('IS SMALL SCREEN')
      cbMobile();
    } else {
      // console.log('IS LARGE SCREEN')
      cbDesktop();
    }
  };

  smallScreen.addEventListener("change", handleTabletChange);
};
