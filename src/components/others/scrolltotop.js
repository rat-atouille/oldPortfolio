import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const appElement = document.querySelector('.App');
    appElement.scrollTo(0, 0);
  }, [pathname]);
  

  return null;
};

export default ScrollToTop;
