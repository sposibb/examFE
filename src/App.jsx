import AllHeader from "./AllHeader/AllHeader";
import styles from "./App.module.css";
import TopHeader from "./TopHeader/TopHeader";
import SectionInfo from "./SectionInfo/SectionInfo";
import SectionSale from "./SectionSale/SectionSale";
import DemoPlagin from "./DemoPlagin/DemoPlagin";
import Footer from "./Footer/Footer";
import React from "react";

const App = () => {
  return (
    <main className={styles.main}>
      <TopHeader />
      <header>
        <AllHeader />
      </header>
      <SectionInfo />
      <SectionSale />
      <DemoPlagin />
      <Footer />
    </main>
  );
};

export default App;
