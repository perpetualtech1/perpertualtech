import "../public/assets/css/animate.min.css";
import "../public/assets/css/global.css";
import "swiper/css";

import React, { useEffect, useState } from "react";

import Preloader from "../components/elements/Preloader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
        <Preloader loading={loading} />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;