import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
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
      </div>
    </div>
  );
};

export default App;
