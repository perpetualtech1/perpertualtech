import Head from "next/head";
import React, { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  const [hiddenClass, setHiddenClass] = useState("hidden");

  const handleHidden = () => setHiddenClass("");

  const handleRemove = () => {
    if (hiddenClass === "") {
      setHiddenClass("hidden");
    }
  };

  return (
    <>
      <Head>
        <title>Perpetualtech | Creative Design Web Agency</title>
        <meta
          name="title"
          content="Perpetualtech | Creative Design Web Agency"
        />
        <meta
          name="description"
          content="Helping you maximize operations management with digitization. We specialize in IT Consultancy, Web Development, App Development, Digital Marketing, Chatbot Development, Machine Learning Solutions, AI Data Analysis, and Predictive Analytics."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.perpetualtech.com/" />
        <meta
          property="og:title"
          content="Perpetualtech | Creative Design Web Agency"
        />
        <meta
          property="og:description"
          content="Helping you maximize operations management with digitization. We specialize in IT Consultancy, Web Development, App Development, Digital Marketing, Chatbot Development, Machine Learning Solutions, AI Data Analysis, and Predictive Analytics."
        />
        <meta
          property="og:image"
          content="https://www.perpetualtech.com/images/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.perpetualtech.com/" />
        <meta
          property="twitter:title"
          content="Perpetualtech | Creative Design Web Agency"
        />
        <meta
          property="twitter:description"
          content="Helping you maximize operations management with digitization. We specialize in IT Consultancy, Web Development, App Development, Digital Marketing, Chatbot Development, Machine Learning Solutions, AI Data Analysis, and Predictive Analytics."
        />
        <meta
          property="twitter:image"
          content="https://www.perpetualtech.com/images/twitter-image.jpg"
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main font-body text-body">
        <Header handleHidden={handleHidden} />
        <MobileMenu hiddenClass={hiddenClass} handleRemove={handleRemove} />
        {children}
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Layout;
