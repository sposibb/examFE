import AllHeader from "./AllHeader/AllHeader";
import styles from "./App.module.css";
import TopHeader from "./TopHeader/TopHeader";
import SectionInfo from "./SectionInfo/SectionInfo";
import SectionSale from "./SectionSale/SectionSale";
import DemoPlagin from "./DemoPlagin/DemoPlagin";

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
    </main>
  );
};

export default App;
