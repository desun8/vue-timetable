const smallScreen = window.matchMedia("(max-width: 60em)");

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

// export default isMobile;
