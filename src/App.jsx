import React from "react";
import Billing from "./components/Billing";
import CardDeals from "./components/CardDeals";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Termonials from "./components/Termonials";
import styles from "./styles.js";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.marginX}`}>
        <Stats />
        <Features />
        <Billing />
        <CardDeals />
        <Termonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default App;
